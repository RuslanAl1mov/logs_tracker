import React, { useState, useEffect } from 'react';
import { fetchLogById } from '../api/logsApi';

const LogDetails = ({ id }) => {
  const [log, setLog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Загрузка конкретного лога при загризке страницы
  useEffect(() => {
    const getLog = async () => {
      try {
        const data = await fetchLogById(id); 
        setLog(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getLog();
  }, [id]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <h2>Детали лога</h2>
      <p>Timestamp: {log.timestamp}</p>
      <p>Computer: {log.computer_name}</p>
      <p>Event Type: {log.event_type}</p>
      <p>Application: {log.application}</p>
      <p>Window Title: {log.window_title}</p>
      <p>Content: {log.content}</p>
      <img src={log.screenshot_url} alt="Скриншот" />
    </div>
  );
};

export default LogDetails;
