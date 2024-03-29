import Img from "next/future/image";
import { useTranslation } from 'next-i18next';
import logoHero from '../assets/img/zorro.png'

const Hero = () => {
    const { t } = useTranslation();
    return (
        <div className='hero-section' id='Hero'>
            <div className="uk-grid-match uk-flex-top" data-uk-grid>
                <div className='uk-width-expand' style={{ zIndex: 2 }}>
                    <div className="uk-card uk-card-body uk-padding-large">
                        <h2 className='uk-heading-large'>{t("hero.h2")}<br />{t("hero.h2-2")}</h2>
                        <h1 className='uk-heading-small'>{t("hero.h1")}<br />{t("hero.h1-2")}</h1>
                        <button className='uk-button uk-button-green uk-button-large uk-margin-top uk-margin-right' data-uk-toggle="target: #contract">{t("header.Contract")}</button>
                        <a href='#Ecosystem' className='uk-button uk-button-purple uk-button-large uk-margin-top'>{t("header.Ecosystem")}</a>
                    </div>
                </div>
                <div className='uk-hidden@m uk-width-1-3@m uk-margin-top' style={{ position: 'absolute', opacity: 0.5, marginLeft: '1.8rem' }}>
                    <div className="uk-card uk-card-body uk-padding-remove-right uk-text-right">
                        <Img className='hero-img' src={logoHero} alt="ZorroCoin hero" width={400} height={400} quality={90} priority decoding='async'></Img>
                    </div>
                </div>
                <div className='uk-width-1-3@m uk-visible@m'>
                    <div className="uk-card uk-card-body uk-padding-remove-right uk-text-right">
                        <Img className='hero-img' src={logoHero} alt="ZorroCoin hero" width={400} height={400} quality={90} priority decoding='async'></Img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;