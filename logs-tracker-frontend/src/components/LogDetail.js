import React, { useState, useEffect } from 'react';
import { fetchLogById } from '../api/logsApi';
import { toast } from 'react-toastify';

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
        setLoading(false);
      }
    };

    getLog();
  }, [id]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="log-info-block">
      <div className="info-block">
        <table className="info-table">
          <tbody>
            <tr>
              <td>timestamp</td>
              <td>{log.timestamp}</td>
            </tr>
            <tr>
              <td>computer_name</td>
              <td>{log.computer_name}</td>
            </tr>
            <tr>
              <td>event_type</td>
              <td>{log.event_type}</td>
            </tr>
            <tr>
              <td>application</td>
              <td>{log.application}</td>
            </tr>
            <tr>
              <td>window_title</td>
              <td>{log.window_title}</td>
            </tr>
            <tr>
              <td>content</td>
              <td>{log.content}</td>
            </tr>
            <tr>
              <td>Ссылка на скриншот</td>
              <td><a href={log.screenshot} target='_blank'>Ссылка на скриншот</a></td>
            </tr>

          </tbody>
        </table>
      </div>
      <div className='info-image'>
        <img className="log-screenshot" src={log.screenshot} />
      </div>
    </div>
  );
};

export default LogDetails;
