import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../Components/Header/Header';
import Sidebar from '../Components/Sidebar/Sidebar';
import Footer from '../Components/Footer/Footer';

import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Tasks from '../Pages/Tasks/Tasks';
import TaskDetail from '../Pages/TaskDetail/TaskDetail';

import './App.css';

function App() {
  return (
    <Router>
        <div className="app">
          <Header />
          <div className="main-content">
            <Sidebar />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/dashboard"
                  element={
                      <Dashboard />
                  }
                />
                <Route
                  path="/items"
                  element={
                      <Tasks />
                  }
                />
                {/**/}
                <Route
                  path="/item/:id"
                  element={
                      <TaskDetail />
                  }
                />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
    </Router>
  );
}

export default App;
