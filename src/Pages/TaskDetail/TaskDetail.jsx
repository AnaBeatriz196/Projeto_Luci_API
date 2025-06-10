import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function TaskDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchTask() {
            try {
                const res = await axios.get(`http://localhost:3001/tasks/${id}`);
                setTask(res.data);
            } catch (err) {
                setError('Tarefa não encontrada.');
            }
            setLoading(false);
        }

        fetchTask();
    }, [id]);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Detalhes da Tarefa</h2>
            <p><strong>ID:</strong> {task.id}</p>
            <p><strong>Título:</strong> {task.title}</p>
            <p><strong>Status:</strong> {task.completed ? 'Concluída' : 'Pendente'}</p>
            <button onClick={() => navigate('/items')}>Voltar para lista</button>
        </div>
    );
}

export default TaskDetail;
