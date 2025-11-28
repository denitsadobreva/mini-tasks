import TaskItem from './TaskItem';
import styles from "./TaskList.module.css";

export default function TaskList({ tasks, handleToggleComplete, handleDelete }) {
  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggleComplete={() => handleToggleComplete(task.id)} onDelete={() => handleDelete(task.id)} />
      ))}
    </ul>
  )
}