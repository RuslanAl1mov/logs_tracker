import React, { useState } from "react";
import LogList from "./components/LogList";
import LogDetail from "./components/LogDetail";
import "./App.css";

const App = () => {
  const [selectedLogId, setSelectedLogId] = useState(null);

  return (
    <div className="App">
      <h1>Event Logs</h1>
      <div className="container">
        <div className="log-list">
          <LogList onSelectLog={setSelectedLogId} />
        </div>
        <div className="log-detail">
          <LogDetail logId={selectedLogId} />
        </div>
      </div>
    </div>
  );
};

export default App;
