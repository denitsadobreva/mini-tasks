import TaskItem from './TaskItem';

export default function TaskList({ tasks, handleToggleComplete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggleComplete={() => handleToggleComplete(task.id)} />
      ))}
    </ul>
  )
}