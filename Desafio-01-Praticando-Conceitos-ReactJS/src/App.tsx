import { Header } from "./components/Header"
import { Task } from "./components/Task"

import styles from './App.module.css'
import './global.css'

const tasks = [
  {

  },
]

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <Task />
        </main>
      </div>
    </>
  )
}

export default App;