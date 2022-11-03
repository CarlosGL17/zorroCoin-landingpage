import Img from "next/future/image";

import logoHero from '../assets/img/zorro.png'

export default function Home() {
  return (
    <div>
      <div className='hero-section'>
        <div className="uk-grid-match uk-flex-middle" data-uk-grid>
          <div className='uk-width-expand' style={{zIndex: 2}}>
            <div className="uk-card uk-card-body uk-margin-large-top">
              <h1 className='uk-heading-large'>Making The World <br />Work Better For All</h1>
              <h2 className='uk-heading-small'>ZorroCoin is a token made <br />by students for students</h2>
            </div>
          </div>
          <div className='uk-width-auto'>
            <div className="uk-card uk-card-body uk-padding-remove-right uk-text-right">
              <Img className='hero-img' src={logoHero} alt="" width={400} height={400} quality={100} decoding='async'></Img>
            </div>
          </div>
        </div>
      </div>
      <div className='uk-section'>

      </div>
    </div>
  )
}
