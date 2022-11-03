import '../styles/uikit.scss'

import dynamic from 'next/dynamic'
const UIKit = dynamic(() => import('../components/Uikit'), { ssr: true })

const Navbar = dynamic(() => import('../components/Navbar'), { ssr: true });

function MyApp({ Component, pageProps }) {
  return (
    typeof window !== "undefined" ?
      <UIKit>
          <Navbar />
          <Component {...pageProps} />
      </UIKit> 
      :
      <>
      </>
  )
}

export default MyApp
