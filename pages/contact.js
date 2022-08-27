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
            <p>Email: uddarendeli@proton.com</p>
            <p>Telefon: +90 554 960 5406</p>
            <p>Adres: Aydınlar Mah., Elmadağı Cd. No:18/6, 06460 Çankaya/Ankara</p>
            <h4 className={styles.subtitle}><i>Demut Yazılım</i></h4>
            <p><a target={'_blank'} href="https://umizdemud.github.io/">Web Sitesi</a></p>
          </div>
          <GoogleMaps />
        </div>
      </>
    );
}
 
export default Contact;