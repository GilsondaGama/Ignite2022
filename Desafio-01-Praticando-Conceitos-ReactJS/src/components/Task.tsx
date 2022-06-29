import { Check, Circle, PlusCircle, Trash } from 'phosphor-react'
import { useState, ChangeEvent, FormEvent, InvalidEvent, } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './Task.module.css'

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

const initialTasks:Task[] =[
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
]

export function Task() {
  const [tasks, setTasks] = useState<Task[]>([...initialTasks]);
  const [newTaskTitle, setNewTaskTitle] = useState(''); 

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const newTask = {
      id: uuidv4(),
      title: newTaskTitle,
      isCompleted: false
    }

    setTasks([...tasks, newTask])
    setNewTaskTitle('')
  } 

  function handleNewTaskChange (event: ChangeEvent<HTMLTextAreaElement>) { 
    event.target.setCustomValidity('')  
    setNewTaskTitle(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Por favor, digite uma tarefa!')
  }


  function handleTogleIsCompleted(id: String) {
    const taskToToggle = tasks.find(task => task.id === id)
    if(!taskToToggle) return
    taskToToggle.isCompleted = !taskToToggle.isCompleted
    setTasks([...tasks])
  }

  function handleDeleteTask(taskToDelete: String) {
    const tasksWithoutDeletedOne = tasks.filter(task => task.id !== taskToDelete)
    setTasks(tasksWithoutDeletedOne)
  }

  return (
    <div className={styles.task}>
      <header>
        <form onSubmit={handleCreateNewTask}>
          <textarea
            name="task"
            value={newTaskTitle}
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            required
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
            <div key={task.id} className={styles.taskItem}>            
              <input 
                type="checkbox"
                className={styles.taskCheckIsComplete}
                readOnly
                checked={task.isCompleted}
                onClick={() => handleTogleIsCompleted(task.id)}
              />              

              <p className={task.isCompleted ? styles.taskItemPCompleted : styles.taskItemPNotCompleted}>
                {task.title}
              </p>

              <button
                type="button"
                className={styles.taskTrashButton}
                onClick={() => handleDeleteTask(task.id)}
                title="Deletar comentário"
              >
                <Trash size={30} />
              </button>
            </div>

          )
        })}
      </div>
    </div>
  )
}