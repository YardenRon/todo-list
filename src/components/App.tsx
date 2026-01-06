import { useState, useCallback, use } from 'react';
import './App.css';
import TodoCreate from './TodoCreate';
import TodoList from './TodoList';
import Task from '../models/Task';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = useCallback((title: string) => {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }, [tasks]);

  const removeTask = useCallback((id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  }, [tasks]);

  const changeTask = useCallback((id: string, title: string, completed: boolean) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, title, completed } : task));
  }, [tasks]);
  
  return (
    <main className="main">
      <h1>React Todo</h1>
      <TodoList tasks={tasks} onRemove={removeTask} onChange={changeTask} />
      <TodoCreate onCreate={createTask} />
    </main>
  );
}

export default App;
