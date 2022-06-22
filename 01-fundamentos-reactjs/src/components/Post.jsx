import { styles } from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/32863365?v=4" />
          <div className={styles.authorInfo}>
            <strong>Gilson da Gama</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="15 de Julho às 8:13h" dateTime="2022-05-11 08:13:35">Publicado há 1h</time>
      </header>

      <div className={styles.content}>

        <p>Learn everything there </p>
        <p>from its medieval origins to the digital era</p>
        <a href=''>
          <p>is to know about the ubiquitous lorem ipsum passage</p>
          <p>anim id est laborum</p>
        </a>
      </div>
    </article>
  )
}