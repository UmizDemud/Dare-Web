import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import content from '../lang/content.json'
import { useEffect, useState } from 'react'

export default function Home({lang}) {

  useEffect(() => {
    console.log(`Page language is ${lang ? "Turkish" : "English"}`)
  }, [lang]);

  return (
    <>
      <Head>
        <title>{content.content.pages.home.head.title[lang]}</title>
        <meta name="keywords" content="Dare Home page Consulting Consultant Danışmanlık anasayfa"/>
      </Head>
      <div className={styles.background}>
      <div className={styles.homeContainer}>
        <h1 className={styles.title}>{content.content.pages.home.body.title[lang]}</h1>
        <div className={styles.columnsHolder}>
        <div className={styles.columnL}>
        <p className={styles.text}>{content.content.pages.home.body.p1[lang]}</p>
        <p className={styles.text}>{content.content.pages.home.body.p2[lang]}</p>
        </div>
        <div style={{'paddingTop': '25px'}} className={styles.columnS}>
          <Image src="/plane2.jpg" layout="responsive" width="400" height="240" alt={content.content.pages.home.body.img1_alt[lang]}/>
        </div>
        </div>
        <p className={styles.text}>{content.content.pages.home.body.p3[lang]}</p>
        <p className={styles.text}>{content.content.pages.home.body.p4[lang]}</p>
        <p className={styles.text}>{content.content.pages.home.body.p5[lang]}</p>
        <p className={styles.text}>{content.content.pages.home.body.p6[lang]}</p>
        <div className={styles.linkBlock}>
          <p><i>{content.content.pages.home.body.p7[lang]}</i></p>
          <Link href="/projects/">
            <a className={styles.btn}>{content.content.pages.home.body.a1[lang]}</a>
          </Link>
        </div>
        <div className={styles.columnsHolder}>
          <div className={styles.columnS}>
            <h1>Hakkında</h1>
            <p>Dare Danışmanlığın ana görevi, ortaklarımızın konu alanları ve müşteri sorunları üzerine analizler yürütmek; bilimsel, teknik, organizasyonal, ekonomik ve ekolojik çözümler geliştirmektir.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!
            </p>
          </div>
          <div style={{'paddingTop': '25px'}} className={styles.columnL}>
            <Image src="/plane.jpg" layout="responsive" width="400" height="240" alt="image of a plane"/>
          </div>
        </div>      
        <div className={styles.linkBlock}>
          <p><i>{content.content.pages.home.body.p8[lang]}</i></p>
          <Link href="/contact">
            <a className={styles.btn}>{content.content.pages.home.body.a2[lang]}</a>
          </Link>
        </div>
      </div>

      </div>
    </>
  )
}