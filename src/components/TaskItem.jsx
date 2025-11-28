export default function TaskItem({ task, onToggleComplete }) {

  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</span>
      <button onClick={() => onToggleComplete(task.id)}>{task.completed ? 'Undo' : 'Complete'}</button>
    </li>
  )
}