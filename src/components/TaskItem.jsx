import { useState } from "react";
export default function TaskItem({ task, onToggleComplete, onDelete, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(task.title);

    const handleUpdate = (id, editTitle) => {
        onUpdate(id, editTitle);
        setIsEditing(false);
    }
  return (
    <li>
        {isEditing ? 
        <div>
        <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
        <button type="submit" onClick={() => handleUpdate(task.id, editTitle)}>Save</button>
        <button type="submit" onClick={() => setIsEditing(false)}>Cancel</button>
      </div> :
        <div><span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</span>
        <button onClick={() => onToggleComplete(task.id)}>{task.completed ? 'Undo' : 'Complete'}</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
        <button onClick={() => setIsEditing(true)}>Edit</button></div>
        }
      
    </li>
  )
}