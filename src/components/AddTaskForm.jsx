import { useState } from 'react';

export default function AddTaskForm({ onAddTask }) {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === '') return;
        onAddTask(title);
        setTitle('');
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button type="submit">Add Task</button>
        </form>
        </div>
    )
}