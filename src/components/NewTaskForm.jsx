import { useState } from 'react';
import './NewTaskForm.css'; 

function NewTaskForm({ onSave, onCancel }) {
  const [title, setTitle] = useState('');
  const [descricao, setDescricao] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [prazo, setPrazo] = useState('');

  const handleSave = () => {
    if (!title || !responsavel || !prazo) {
      alert('Título, Responsável e Prazo são obrigatórios!');
      return;
    }

    const nomeRegex = /^[A-Za-z\s]+$/;
    if (!nomeRegex.test(responsavel)) {
      alert('O nome do responsável não pode conter números.');
      return;
    }
    
    onSave({ title, descricao, responsavel, prazo });
  };

  return (
    <div className="new-task-form">
      <input 
        placeholder="Título da tarefa" 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
      />
      <textarea 
        placeholder="Descrição" 
        value={descricao} 
        onChange={e => setDescricao(e.target.value)} 
      />
      <input 
        placeholder="Responsável" 
        value={responsavel} 
        onChange={e => setResponsavel(e.target.value)} 
      />
      <input 
        type="date" 
        placeholder="Prazo" 
        value={prazo} 
        onChange={e => setPrazo(e.target.value)} 
      />
      <div className="form-buttons">
        <button onClick={onCancel}>Cancelar</button>
        <button onClick={handleSave} className="save-button">Salvar</button>
      </div>
    </div>
  );
}
export default NewTaskForm;