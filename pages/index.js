import Head from 'next/head'
import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/Hero'), { ssr: true })

export default function Home() {
  return (
    <div>
      <Head>
        <title>ZorroCoin</title>
        <meta name="description" content="Zorro Coin ERC20 token" />
        <link rel="icon" href="/favicon.ico" decoding='async' />
      </Head>
      <Hero></Hero>
      <div className='uk-section uk-margin-remove-top'>
        <div className='uk-container uk-container-xlarge'>
        </div>
      </div>
    </div>
  )
}
