import { Trash } from 'phosphor-react'

import styles from './Task.module.css'

interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
  onDeleteTask: (id: string) => void  
  onTogleIsCompleted: (id: string) => void  
}

export function TaskList({id, title, isCompleted, onDeleteTask, onTogleIsCompleted}: TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleTogleIsCompleted() {
    onTogleIsCompleted(id);
  }

  return(
    <div key={id} className={styles.taskItem}> 
    <div className={styles.checkbox}>         
      <input 
        type="checkbox"
        checked={isCompleted}
        readOnly
        onClick={handleTogleIsCompleted}
      />              
    </ div>

    <p className={isCompleted ? styles.taskTitleCheck : styles.taskTitleNoCheck}>
      {title}
    </p>

    <button
      type="button"
      className={styles.taskTrashButton}
      onClick={handleDeleteTask}
      title="Deletar comentário"
    >
      <Trash size={30} />
    </button>
  </div>
  )
}