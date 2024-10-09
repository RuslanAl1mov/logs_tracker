import { fetchLogs } from '../api/logsApi';
import UploadForm from './UploadForm';

const PublishPage = () => {

    return (
        <div className="main-container">
            <div className='content-block'>
                <div className="upload-form-block">
                    <h2 className="title-text">Публикация логов</h2>
                    <UploadForm />
                </div>
            </div>
        </div>
    );
};

export default PublishPage;
