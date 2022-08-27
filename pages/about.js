import Head from 'next/head'
import styles from '../styles/About.module.css'
import Image from 'next/image'


const About = () => {
  return (
    <>
      <Head>
        <title>Dare Comp. | Hakkında</title>
        <meta name="keywords" content="about Dare Company Consulting Consultant hakkında danışmanlık danışman"/>
      </Head>
      <div className={styles.aboutContainer}>
        <div className={styles.column}>
        <h1>Hakkında</h1>
        <p>Dare Danışmanlığın ana görevi, ortaklarımızın konu alanları ve müşteri sorunları üzerine analizler yürütmek; bilimsel, teknik, organizasyonal, ekonomik ve ekolojik çözümler geliştirmektir.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!
        </p>
        </div>
        <div style={{'paddingTop': '25px'}} className={styles.columnS}>
          <Image src="/plane.jpg" layout="responsive" width="400" height="240" alt="image of a plane"/>
        </div>
      </div>
    </>
  );
}
 
export default About;