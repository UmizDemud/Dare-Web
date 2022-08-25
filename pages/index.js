import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dare Comp. | Home</title>
        <meta name="keywords" content="Dare Home page Consulting Consultant"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Welcome</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <Link href="/projects/">
          <a className={styles.btn}>See Project Listing</a>
        </Link>
      </div>
    </>
  )
}