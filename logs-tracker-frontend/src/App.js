import "./App.css"
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublishPage from './pages/PublishPage';
import LogsListPage from './pages/LogsListPage';
import Header from './components/Header';
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<LogsListPage />} />
          <Route path="/publish" element={<PublishPage />} />
        </Routes>


      </Router>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
