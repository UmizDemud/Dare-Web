import Head from "next/head";
import styles from "../styles/Contact.module.css"
import Link from "next/link"
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

          <h2>DARE</h2> <h4>Danışmanlık Ofisi</h4>
          <p>Email: uddarendeli@proton.com</p>
          <p>Telefon: +90 554 960 5406</p>
          <p>Adres: Aydınlar Mah., Elmadağı Cd. No:18/6, 06460 Çankaya/Ankara</p>
          <GoogleMaps />
        </div>
      </>
    );
}
 
export default Contact;