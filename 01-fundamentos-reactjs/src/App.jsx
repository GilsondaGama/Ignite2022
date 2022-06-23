import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/32863365?v=4',
      name: 'Gilson da Gama',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Learn everything there '},
      {type: 'paragraph', content: 'from its medieval origins to the digital era'},
      {type: 'link', content: 'is to know about the ubiquitous lorem ipsum passage', href: 'https://www.google.com'},
    ],
    publishedAt: new Date('2022-6-23 08:13:35'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://xesque.rocketseat.dev/users/avatar/profile-cf6ee6bd-69bc-4472-9dd0-c4403f229adc.jpg',
      name: 'Diego Fernandes',
      role: 'CTO Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Learn everything there '},
      {type: 'paragraph', content: 'from its medieval origins to the digital era'},
      {type: 'link', content: 'is to know about the ubiquitous lorem ipsum passage', href: 'https://www.google.com'},
    ],
    publishedAt: new Date('2022-06-21 18:10:15'),
  },
]

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author} 
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </>
  )
}

export default App;