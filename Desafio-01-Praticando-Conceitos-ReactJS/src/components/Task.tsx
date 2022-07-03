import { PlusCircle } from 'phosphor-react'
import { useState, ChangeEvent, FormEvent, InvalidEvent, } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './Task.module.css'
import clipboard from '../assets/clipboard.svg'
import { TaskList } from './TaskList';

export interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function Task() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState(''); 
  const [tasksCompleteds, setTasksCompleteds] = useState(0);
  const [tasksTotal, setTasksTotal] = useState(0);
  
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const newTask = {
      id: uuidv4(),
      title: newTaskTitle,
      isCompleted: false
    }

    setTasks([...tasks, newTask])
    setNewTaskTitle('')
    setTasksTotal(tasksTotal + 1)
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
    setTasksCompleteds(tasks.filter(task => task.isCompleted).length)
  }

  function handleDeleteTask(taskToDelete: String) {
    const tasksWithoutDeletedOne = tasks.filter(task => task.id !== taskToDelete)
    setTasks(tasksWithoutDeletedOne)

    setTasksCompleteds(tasksWithoutDeletedOne.filter(task => task.isCompleted).length)
    setTasksTotal(tasksTotal - 1)
  }

  return (
    <div className={styles.task}>
      <header>
        <form onSubmit={handleCreateNewTask}>
          <textarea
            name="task"
            placeholder="Adicione uma nova tarefa"
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

      <div className={styles.tasksCompleteds}>
        <header>
            <p>Tarefas criadas {tasksTotal}</p>      
            <p>Concluídas {tasksCompleteds} de {tasksTotal}</p>
        </header>
        <hr/>
      </div>
  
      <div className={styles.taskList}>          
        { tasks.length > 0 && 
          tasks.map(task => {
            return (
              <TaskList 
                key={task.id}
                id={task.id}
                title={task.title}
                isCompleted={task.isCompleted}
                onDeleteTask={handleDeleteTask}
                onTogleIsCompleted={handleTogleIsCompleted}
              />
            
            )
          })
        }

        { tasks.length === 0 && 
          <div className={styles.emptyTasks}>
            <img src={clipboard} alt="Logo do Desafio 01 - ToDo" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        }
      </div>
    </div>
  )
}
              