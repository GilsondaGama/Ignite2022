import { Trash, ThumbsUp } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';


export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount( likeCount + 1)
  }
  
  return (
    <div className={styles.comment}>
      <Avatar 
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/32863365?v=4" 
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gilson da Gama</strong>
              <time title="15 de Julho às 8:13h" dateTime="2022-05-11 08:13:35">Cerca de uma hora atrás</time>
            </div>

            <button 
              onClick={handleDeleteComment} 
              title="Deletar comentário"
            >
              <Trash size={24}/>
            </button>
          </header>
          
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}