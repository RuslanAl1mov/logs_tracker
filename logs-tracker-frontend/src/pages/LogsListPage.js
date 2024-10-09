import React, { useEffect, useState } from 'react';
import LogsList from '../components/LogList';
import LogDetails from '../components/LogDetail';


const LogsListPage = () => {
    const [logSelect, setLogSelect] = useState(null);

    // Страница списка логов
    return (
        <div className="main-container">
            <div className='content-block'>
                <div className="logs-list-block">
                    <h2 className="title-text">Список логов</h2>
                    <LogsList onSelectLog={setLogSelect} />
                </div>
                {logSelect ? (
                    <div>
                        <LogDetails id={logSelect} />
                    </div>
                ) : ''}
            </div>
        </div>
    );
};

export default LogsListPage;
