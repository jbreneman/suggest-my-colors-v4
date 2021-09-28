import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '../components/Button/Button'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>suggestmycolorsv4</title>
        <meta name="description" content="Colors and math and stuff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Button>
          <span>asdf</span>
        </Button>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
