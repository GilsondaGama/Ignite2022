import styles from './Header.module.css'

import desafioTodoLogo from '../assets/desafio-todo-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={desafioTodoLogo} alt="Logo do Desafio 01 - ToDo" />
    </header>

  )
}
