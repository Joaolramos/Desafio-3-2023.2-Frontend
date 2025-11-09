import { useState } from 'react'; 
import TaskCard from './TaskCard';
import NewTaskForm from './NewTaskForm';
import { FaPlus } from 'react-icons/fa';
import './Column.css'; 

function Column({ title, tasks, onAddTask, onDeleteTask }) { 
  const [isAdding, setIsAdding] = useState(false);

  const handleSaveTask = (taskData) => {
    onAddTask(taskData, title); 
    setIsAdding(false); 
  };

  return (
    <div className="column">
      <h2>{title}</h2>
      
      <div className="tasks-container">
        {tasks.map(task => (
          <TaskCard 
            key={task.id} 
            taskData={task} 
            onDelete={onDeleteTask}
          />
        ))}

        {isAdding && (
          <NewTaskForm 
            onSave={handleSaveTask} 
            onCancel={() => setIsAdding(false)} 
          />
        )}
      </div>

      {!isAdding && (
        <button className="add-task-btn" onClick={() => setIsAdding(true)}>
          <FaPlus />
        </button>
      )}
    </div>
  );
}
export default Column;