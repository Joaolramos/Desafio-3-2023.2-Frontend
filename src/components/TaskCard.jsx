import './TaskCard.css'; 
import { FaUserAlt, FaCalendarAlt, FaTrash } from 'react-icons/fa';

function formatarData(data) {
  if (!data) return 'N/A';
  const [ano, mes, dia] = data.split('-');
  return `${dia}/${mes}/${ano}`;
}

function TaskCard({ taskData, onDelete }) {
  return (
    <div className="task-card">
      
      <div className="card-header">
        <h4>{taskData.title}</h4>
        <button className="delete-btn" onClick={() => onDelete(taskData.id)}>
          <FaTrash />
        </button>
      </div>

      <div className="card-body">
        <p>{taskData.descricao}</p>
        
        <span className="info-line">
          <FaUserAlt className="icon" /> {taskData.responsavel}
        </span>
        <span className="info-line">
          <FaCalendarAlt className="icon" /> {formatarData(taskData.prazo)}
        </span>
      </div>

    </div>
  );
}
export default TaskCard;