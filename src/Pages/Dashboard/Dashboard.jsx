import React, { useContext } from 'react';
import { AuthContext } from '../../Components/Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div className="dashboard">
            <h2>Bem-vindo, {user?.username}!</h2>
            <p>Você está na área principal do sistema.</p>
            <div className="dashboard-buttons">
                <button onClick={() => navigate('/items')}>Ver Tarefas</button>
                <button onClick={logout}>Sair</button>
            </div>
        </div>
    );
}

export default Dashboard;
