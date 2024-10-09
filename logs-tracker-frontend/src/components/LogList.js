import React, { useState, useEffect } from 'react';
import { fetchLogs } from '../api/logsApi'; 

const LogsList = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Загружаем логи при загрузке страницы
  useEffect(() => {
    const getLogs = async () => {
      try {
        const data = await fetchLogs(); 
        setLogs(data.logs);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getLogs();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <ul>
      {logs.map(log => (
        <li key={log.timestamp}>
          {log.timestamp} - {log.computer_name} - {log.event_type}
        </li>
      ))}
    </ul>
  );
};

export default LogsList;
