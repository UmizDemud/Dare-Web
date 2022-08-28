import Head from "next/head";
import Footer from "./Footer"
import Navbar from "./Navbar..js"
import React, { useState } from 'react'

const Layout = ({ children }) => {
  const [lang, setLang] = useState(1)
  return (
    <>
    <Head>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any"></link>
    </Head>
    
    <div className="content">
      <Navbar lang={lang} setLang={setLang} />
      {
          React.cloneElement(children, {
              lang: lang
          })
      }
      <Footer lang={lang}/>
    </div>
    </>
  );
}
 
export default Layout;