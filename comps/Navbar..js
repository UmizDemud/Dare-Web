import Link from 'next/link'
import Logo from './Logo';
import styles from './Navbar.module.css'


const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Logo />
      </div>
      <div className={styles.navbarLinks}>
      <Link href="/"><a className={styles.navbarLink}>Home</a></Link><span className={styles.seperator}>|</span>
      <Link href="/about"><a className={styles.navbarLink}>About</a></Link><span className={styles.seperator}>|</span>
      <Link href="/processes/"><a className={styles.navbarLink}>Projects</a></Link><span className={styles.seperator}>|</span>
      <Link href="/processes/"><a className={styles.navbarLink}>Contact</a></Link>
      </div>
    </nav>
  );
}
 
export default Navbar;