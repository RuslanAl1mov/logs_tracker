import React, { useState, useEffect } from 'react';
import { fetchLogs } from '../api/logsApi';
import LogDetails from './LogDetail';

const LogsList = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLogId, setSelectedLogId] = useState(null);

  // Load logs on component mount
  useEffect(() => {
    const getLogs = async () => {
      try {
        const data = await fetchLogs();
        console.log(data); // Check the API response
        setLogs(data); // Set logs directly
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getLogs();
  }, []);

  const handleDetailsBlockClick = (log_id) => {
    setSelectedLogId((prevId) => (prevId === log_id ? null : log_id)); // Toggle selected log ID
  };

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <ul className="logs-list">
        {Array.isArray(logs) && logs.length > 0 ? (
          logs.map(log => (
            <li className="logs-card" key={log.id} onClick={() => handleDetailsBlockClick(log.id)}>
              <div className="log-name-block"><span>{log.timestamp} |</span> {log.computer_name}</div>
              {selectedLogId === log.id && <LogDetails id={log.id} />} {/* Render LogDetails if selected */}
            </li>
          ))
        ) : (
          <li>Нет доступных логов</li>
        )}
      </ul>
    </div>
  );
};

export default LogsList;
