import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR' 

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post({author, content, publishedAt}) {
  const publishedDateFormatted = 
    format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
      locale: ptBR
    }
  )

  const publishedDateRelativetoNow = 
    formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
      }
    )

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime = {publishedAt.toISOString()}>
          {publishedDateRelativetoNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>
          }
        })}



        {/* <p>Learn everything there </p>
        <p>from its medieval origins to the digital era</p>
        <p>is to know about the ubiquitous lorem ipsum passage</p>
        <a href=''>
          <p>anim id est laborum</p>
        </a> */}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe o seu comentário</strong>

        <textarea
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>


      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}