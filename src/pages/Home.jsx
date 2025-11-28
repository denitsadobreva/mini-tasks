import { useEffect, useState } from 'react';
import { getTasks } from '../services/api';
import TaskList from '../components/TaskList';  
import AddTaskForm from '../components/AddTaskForm';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getTasks().then((data) => {
        console.log(data);
        setTasks(data);
    })
    .catch((err) => {console.log(err)});
  }, []);

  const handleAddTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false
    }
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  return (
    <div>
      <TaskList tasks={tasks} />
      <AddTaskForm onAddTask={handleAddTask} />
    </div>
  )
}