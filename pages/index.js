import Head from 'next/head'
import dynamic from 'next/dynamic'

//import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Hero = dynamic(() => import('../components/Hero'), { ssr: true })
const Ecosystem = dynamic(() => import('../components/Ecosystem'), { ssr: true })
const Community = dynamic(() => import('../components/Community'), { ssr: true })
const Roadmap = dynamic(() => import('../components/Roadmap'), { ssr: true })

export default function Home({ }) {
  return (
    <div>
      <Head>
        <title>ZorroCoin</title>
        <meta name="description" content="ZorroCoin ERC20 token" />
        <meta name="keywords" content="Zorro Coin, ERC20 token, students, ITESZ" />
        <meta name="author" content="ZorroCoin Ecosysten" />
        <meta name="copyright" content="ZorroCoin Ecosysten" />
        <link rel="canonical" href="https://zorrocoin.tech/" />
        <link rel="icon" href="/favicon.ico" decoding='async' />
        <link rel="shortcut icon" href="https://zorrocoin.tech/logo32s.png" />
        <meta name="theme-color" content="#160E33" />
      </Head>
      <Hero />
      <Ecosystem />
      <Roadmap />
      <Community />
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}