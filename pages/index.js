import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>users list | Home</title>
      <meta name='keywords' content='users' />
    </Head>
    <h1 className={styles.title}>Home Page</h1>
    <p className={styles.text}>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
    <p className={styles.text}>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
    <Link
    legacyBehavior
    href="/users"
    >
      <a 
      className={styles.btn}> see users listing</a>
    </Link>
    </>
  )
}
