import '../styles/uikit.scss'
//import { appWithTranslation } from 'next-i18next'
const appWithTranslation = ( await import('next-i18next')).appWithTranslation
import dynamic from 'next/dynamic'
const UIKit = dynamic(() => import('../components/Uikit'), { ssr: true })
const Navbar = dynamic(() => import('../components/Navbar'), { ssr: true });

const MyApp =({ Component, pageProps }) => {
  return (
    typeof window !== "undefined" &&
      <UIKit>
          <Navbar />
          <Component {...pageProps} />
      </UIKit> 
  )
}

export default appWithTranslation(MyApp)
