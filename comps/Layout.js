import Head from "next/head";
import Footer from "./Footer"
import Navbar from "./Navbar..js"

const Layout = ({ children }) => {
  return (
    <>
    <Head>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any"></link>
    </Head>
    <div className="content">
      <Navbar />
      { children }
      <Footer />
    </div>
    </>
  );
}
 
export default Layout;