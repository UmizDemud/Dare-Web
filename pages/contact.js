import Head from "next/head";
import styles from "../styles/Contact.module.css"
import GoogleMaps from "../comps/GoogleMaps/GoogleMaps";


const Contact = () => {
    return ( 
    <>
        <Head>
          <title>Dare Comp. | İletişim</title>
          <meta name="keywords" content="Dare Contact page Consulting Consultant Danışmanlık iletişim"/>
        </Head>
        <div className={styles.contactContainer}>
          <h1 className={styles.title}>İletişim</h1>
          <div className={styles.contactInfo}>
            <h2 className={styles.underscore}>DARE Danışmanlık</h2> 
            <h4 className={styles.subtitle}><i>Danışmanlık Ofisi</i></h4>
            <p>Email: <span className={styles.value}>uddarendeli@proton.com</span></p>
            <p>Telefon: <span className={styles.value}>+90 554 960 5406</span></p>
            <p style={{marginBottom: '0'}}>Adres: <span className={styles.value}>Aydınlar Mah., Elmadağı Cd. No:18/6, 06460</span></p>
            <p style={{marginTop: '0'}}><span className={styles.value}>Çankaya/Ankara</span></p>
            <h4 className={styles.subtitle}><i>Demut Yazılım</i></h4>
            <p><a rel="noreferrer"  target={'_blank'} href="https://umizdemud.github.io/">Web Sitesi</a></p>
          </div>
          <GoogleMaps />
        </div>
      </>
    );
}
 
export default Contact;