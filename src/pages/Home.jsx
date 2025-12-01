import { useEffect, useState } from 'react';
import { getTasks } from '../services/api';
import TaskList from '../components/TaskList';  
import AddTaskForm from '../components/AddTaskForm';

export default function Home() {
    const [tasks, setTasks] = useState(() => {
        const stored = localStorage.getItem("tasks");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    
    const handleAddTask = (title) => {
        const newTask = {
        id: Date.now(),
        title: title,
        completed: false
        }
        setTasks((prevTasks) => [...prevTasks, newTask]);
    }

    const handleToggleComplete = (id) => {
        setTasks((prevTasks) => prevTasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
    }

    const handleDelete = (id) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
    }

    const handleUpdate = (id, title) => {
        setTasks(prevTasks => prevTasks.map(task => 
        task.id === id ? {...task, title: title} : task));
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div>
            <h1>Tasks</h1>
            <TaskList tasks={tasks} handleToggleComplete={handleToggleComplete} handleDelete={handleDelete} handleUpdate={handleUpdate} />
            <AddTaskForm onAddTask={handleAddTask} />
        </div>
    )
}