import { fetchLogs } from '../api/logsApi';
import UploadForm from './UploadForm';



const PublishPage = () => {

    const collectLogData = (logEntry) => {
        sendLogToServer(logEntry); // Отправляем лог на сервер
    };

    const sendLogToServer = async (logEntry) => {
        try {
            const data = await fetchLogs();
            console.log('Лог успешно отправлен на сервер:', data);
        } catch (error) {
            console.error('Ошибка при отправке лога:', error);
        }
    };

    return (
        <div className="main-container">
            <div className='content-block'>
                <div className="upload-form-block">
                    <h2 className="title-text">Публикация логов</h2>
                    <UploadForm onUploadSuccess={(data) => console.log('Файл успешно загружен:', data)} collectLogData={collectLogData} />
                </div>
            </div>
        </div>
    );
};

export default PublishPage;
