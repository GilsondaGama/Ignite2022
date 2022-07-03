import { Trash } from 'phosphor-react'

import styles from './Task.module.css'

interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
  onDeleteTask: (id: string) => void  
}

export function TaskList({id, title, isCompleted, onDeleteTask}: TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return(
    <div key={id} className={styles.taskItem}> 
    <div className={styles.checkbox}>         
      <input 
        type="checkbox"
        checked={isCompleted}
        readOnly
        // onClick={() => handleTogleIsCompleted(id)}
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