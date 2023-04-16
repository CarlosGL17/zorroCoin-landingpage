import Img from "next/future/image";

import logo from '../assets/img/zorroCoinLogo12.png'
import frame from '../assets/img/Frame.png'
import frame2 from '../assets/img/Frame2.png'

import frame3 from '../assets/img/Frame3.png'
import frame4 from '../assets/img/Frame4.png'

const Ecosystem = () =>
    <div className='uk-section uk-margin-remove-top' id='Ecosystem'>
        <div className='uk-container uk-container-xlarge uk-padding-large uk-padding-remove-vertical'>
            <h3 className='uk-heading-medium'>ECOSISTEMA</h3>
            <p className='uk-margin-remove-top uk-text-white'>ZorroCoin nacio por una simple pregunta que se planteo una comunidad descentralizada del ITESZ (Instituto Tecnologico de Estudios Superiores de Zamora):
                &quot;podría un equipo descentralizado de estudiantes hacer una criptomoneda para estudiantes y además beneficiar al medioambiente.&quot;
                ZorroCoin, es un Token ERC-20 basado en la red Polygon, que tiene como objetivo demostrar que es posible. Con este pensamiento y filosofía en mente, la comunidad de ZorroCoin comenzó el desarrollo de todo un ecosistema.</p>
            <div className='uk-text-center'>
                <button className='uk-button uk-button-purple uk-button-large'>Leer whitepaper</button>
            </div>
            <div className='uk-grid uk-grid-medium uk-grid-match uk-margin-medium-top' data-uk-grid>
                <div className='uk-width-1-3@s'>
                    <div className='uk-card uk-card-border-green uk-padding-small uk-text-center'>
                        <h3 className='uk-text-bolder uk-text-white-h3'>ZorroCoin (ZORRO)</h3>
                        <Img className='purple-glow' src={logo} alt="ZorroCoin liquidity" width={200} height={200} quality={100} decoding='async' />
                        <p className='uk-text-white uk-margin-small-bottom'>Campaña para incentivar el reciclaje en el ITESZ y dar liquidez al token</p>
                    </div>
                </div>
                <div className='uk-width-1-3@s'>
                    <div className='uk-card uk-card-border-green uk-padding-small uk-text-center'>
                        <h3 className='uk-text-bolder uk-text-white-h3'>Adopción</h3>
                        <Img className='purple-glow' src={frame2} alt="ZorroCoin global" width={170} height={170} quality={100} decoding='async' />
                        <p className='uk-text-white uk-margin-small-bottom'>Implementar como método de pago en diferentes nodos del ITESZ</p>
                    </div>
                </div>
                <div className='uk-width-1-3@s'>
                    <div className='uk-card uk-card-border-green uk-padding-small uk-text-center'>
                        <h3 className='uk-text-bolder uk-text-white-h3'>RedZorro (blockchain)</h3>
                        <Img className='purple-glow' src={frame} alt="ZorroCoin blockchain" width={200} height={200} quality={100} decoding='async' />
                        <p className='uk-text-white uk-margin-small-bottom'>Crear projectos, firmar documentos, NFT, empleando la blockchain propia desarrollada por la comunidad de ZorroCoin</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='uk-container uk-container-xlarge uk-padding-large uk-padding-remove-vertical uk-margin-large-top'>
            <div className='uk-card uk-card-border-purple uk-padding-small uk-text-center'>
                <h3 className='uk-heading-medium'>CAMPAÑA DE RECICLAJE</h3>
                <p className='uk-heading-small uk-green-gradient'>PRÓXIMAMENTE</p>
                <Img className='hero-img' src={frame3} alt="ZorroCoin liquidity campaing" width={225} height={225} quality={100} decoding='async' />
                <h3 className='uk-text-bolder uk-text-white-h3 uk-margin-small-top'>Evento privado. Campaña con el objetivo de fomentar la cultura del reciclaje dentro del ITESZ y obtener liquidez.</h3>
            </div>
        </div>
        <div className='uk-container uk-container-xlarge uk-padding-large uk-padding-remove-vertical uk-margin-large-top'>
            <div className='uk-card uk-card-border-purple uk-padding-small uk-text-center'>
                <h3 className='uk-heading-medium'>OFERTA INICIAL DE MONEDAS (ICO)</h3>
                <p className='uk-heading-small uk-green-gradient'>PRÓXIMAMENTE</p>
                <Img className='hero-img' src={frame4} alt="ZorroCoin Initial Coin Offering" width={225} height={225} quality={100} decoding='async' />
                <h3 className='uk-text-bolder uk-text-white-h3 uk-margin-small-top'>Evento publico. Primera oferta inicial de monedas para todo inversionista interesado en el ecosistema.</h3>
            </div>
        </div>
    </div>

export default Ecosystem;