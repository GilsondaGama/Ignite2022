import { Check, CheckCircle, Circle, PlusCircle, Trash } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid';

import styles from './Task.module.css'

interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

const tasks:TaskProps[] =[
  {
    id: uuidv4(),
    title: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 1',
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: 's nisi ut aliquip ex ea commodo consequat. Duis  2',
    isCompleted: true,
  },
  {
    id: uuidv4(),
    title: 'mollit anim id est laborum 3',
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: 'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 4',
    isCompleted: true,
  },
  {
    id: uuidv4(),
    title: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic  5 sometimes known, is dummy text',
    isCompleted: true,
  },   
  {
    id: uuidv4(),
    title: 'mollit anim id est laborum 3',
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: 'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 4',
    isCompleted: true,
  },
  {
    id: uuidv4(),
    title: 'Lor lipsum as it is sometimes knownorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic  5 sometimes known, is dummy text',
    isCompleted: true,
  },       
]

export function Task() {
  return (
    <div className={styles.task}>
      <header>
        <form >
          <textarea
            name="task"
            placeholder='Adicione uma nova tarefa'          
          />

          <button type="submit">
            Criar
            <PlusCircle size={24}/>
          </button>
        </form>        
      </header>

      <div className={styles.taskList}>
        <header>
          <p> Tarefas criadas 5</p>      
          <p>Concluídas 2 de 5</p>
        </header>

        {tasks.map(task => {
          return (
            <div className={styles.taskItem}>
              
              { task.isCompleted 
                ? <Check size={22} className={styles.checkCircle}/> 
                : <Circle size={24} className={styles.circle} />
              }

              <p className={task.isCompleted 
                ? styles.taskItemPCompleted 
                : styles.taskItemPNotCompleted}
              >
                {task.title}</p>
              <Trash size={24}/>
            </div>

          )
        })}
      </div>
    </div>
  )
}