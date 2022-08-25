import Layout from '../comps/Layout'
import '../styles/globals.css'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  return (
    <Layout>
      {loading ?
        'loading' : <Component {...pageProps} />
      }
    </Layout>
  )
}

export default MyApp