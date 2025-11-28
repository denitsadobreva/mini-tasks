import { useEffect, useState } from 'react';
import { getTasks } from '../services/api';
export default function Home() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getTasks().then((data) => {
        console.log(data);
        setTasks(data);
    })
    .catch((err) => {console.log(err)});
  }, []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}