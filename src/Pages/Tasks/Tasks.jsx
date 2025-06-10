import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tasks.css';

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [editingId, setEditingId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;

        if (editingId) {
            setTasks(tasks.map(task =>
                task.id === editingId
                    ? { ...task, title, description }
                    : task
            ));
            setEditingId(null);
        } else {
            const newTask = {
                id: Date.now(),
                title,
                description,
                status: 'pendente',
            };
            setTasks([...tasks, newTask]);
        }

        setTitle('');
        setDescription('');
    };

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleEdit = (task) => {
        setTitle(task.title);
        setDescription(task.description);
        setEditingId(task.id);
    };

    const toggleStatus = (id) => {
        setTasks(tasks.map(task =>
            task.id === id
                ? {
                    ...task,
                    status: task.status === 'pendente' ? 'em andamento' :
                        task.status === 'em andamento' ? 'concluída' :
                            'pendente'
                }
                : task
        ));
    };

    return (
        <div className="tasks">
            <button className="back-button" onClick={() => navigate('/dashboard')}>
                Voltar ao Dashboard
            </button>

            <h2>Minhas Tarefas</h2>

            <form className="task-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Título da tarefa"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">
                    {editingId ? 'Atualizar' : 'Adicionar'}
                </button>
            </form>

            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <div>
                            <strong>{task.title}</strong> - <em>{task.status}</em><br />
                            <small>{task.description}</small>
                        </div>
                        <div>
                            <button onClick={() => toggleStatus(task.id)}>Alterar Status</button>
                            <button onClick={() => handleEdit(task)}>Editar</button>
                            <button onClick={() => handleDelete(task.id)}>Excluir</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tasks;
