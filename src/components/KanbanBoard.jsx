import { useState, useEffect } from 'react';
import Column from './Column';
import './KanbanBoard.css'; 

function KanbanBoard() {
  
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('kanbanTasks');
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('kanbanTasks', JSON.stringify(tasks));
  }, [tasks]); 

  const handleAddTask = (taskData, columnTitle) => {
    const newTask = {
      id: Date.now(), 
      ...taskData,      
      column: columnTitle 
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
    alert('Tarefa criada com sucesso!');
  };

  const handleDeleteTask = (taskId) => {
    if (window.confirm('Tem certeza que quer excluir esta tarefa?')) {
      setTasks(tasks.filter(t => t.id !== taskId));
    }
  };

  const tasksApresentar = tasks.filter(t => t.column === 'A fazer');
  const tasksFazendo = tasks.filter(t => t.column === 'Fazendo');
  const tasksFeito = tasks.filter(t => t.column === 'Feito');     

  return (
    <div className="kanban-board">
      <Column 
        title="A fazer"
        tasks={tasksApresentar} 
        onAddTask={handleAddTask} 
        onDeleteTask={handleDeleteTask}
      />
      <Column 
        title="Fazendo"
        tasks={tasksFazendo} 
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
      />
      <Column 
        title="Feito"
        tasks={tasksFeito} 
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
export default KanbanBoard;