'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>


      <h1>OutOfOrder </h1>




      <div className = {styles.grid}>


        <Link href={`/Main`}>
          <h2 className={styles.card}>
            View all products <span>-&gt;</span>
          </h2>
        </Link>
        <p>Let's see what piece suits you</p>
      


    </div>
    </main >
  )
}

