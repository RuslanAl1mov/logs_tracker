import React, { useState } from 'react';
import { uploadLogs } from '../api/logsApi';
import { toast } from 'react-toastify';

const UploadForm = ({ }) => {
    const [file, setFile] = useState(null);

    // Сохраняем загруженный файл
    const handleFileChange = (event) => {
        setFile(event.target.files[0]); 
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('screenshot', file);
        formData.append('timestamp', new Date().toISOString());
        formData.append('computer_name', window.navigator.userAgent);
        formData.append('event_type', 'Input');
        formData.append('application', 'logs_tracker');
        formData.append('window_title', document.title);
        formData.append('content', `Загружен файл: ${file.name}`);

        try {
            uploadLogs(formData);
            setFile(null); // Сбрасываем состояние после успешной загрузки
            toast.success("Логи отправлены!")
        } catch (err) {
            console.log(err.message); // Сохраняем ошибку для отображения
            toast.error("Ошибка отправки!")
        }
    };

    return (
            <form onSubmit={handleSubmit} className='submit-form'>
                <input className="screenshot-input" type="file" accept="image/*" onChange={handleFileChange} />
                <button className={`submit-btn ${!file ? 'submit-btn--disabled' : ''}`} type="submit" disabled={!file}>Загрузить</button>
            </form>
    );
};

export default UploadForm;
