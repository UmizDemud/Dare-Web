import Link from 'next/link'
import { useState } from 'react';
import Logo from './Logo';
import styles from './Navbar.module.css'
import WorldIcon from './SVGs/World';
import content from '../lang/content.json'


const Navbar = ({lang, setLang}) => {
  const [languageBarOpen, setLanguageBarOpen] = useState(false)

  return (
    <nav>
      <div className="logo">
        <Logo />
      </div>
      <div className={styles.languageOptions}
        onMouseOver={() => setLanguageBarOpen(true)}
        onMouseLeave={() => setLanguageBarOpen(false)}
        >
        {lang ? 
          <div className={styles.langDisplay}><p>Dil:</p> <p className={styles.langBorder}>Türkçe</p></div> 
          : 
          <div className={styles.langDisplay}><p>Language</p> <p className={styles.langBorder}>English</p></div>
        }
        <div className={styles.languageOptions_svg}> 
          <WorldIcon />
        </div>
        <div className={styles.languageList} style={{'display' : languageBarOpen ? 'block' : 'none'}}>
          <p onClick={() => setLang(0)}>English</p>
          <p onClick={() => setLang(1)}>Türkçe</p>
        </div>
      </div>

      <div className={styles.navbarLinks}>
      <Link href="/"><a className={styles.navbarLink}>{content.content.pageNames.home[lang]}</a></Link>
      <Link href="/about"><a className={styles.navbarLink}>{content.content.pageNames.about[lang]}</a></Link>
      <Link href="/processes/"><a className={styles.navbarLink}>{content.content.pageNames.projects[lang]}</a></Link>
      <Link href="/contact/"><a className={styles.navbarLink}>{content.content.pageNames.contact[lang]}</a></Link>
      </div>
    </nav>
  );
}
 
export default Navbar;