import Img from "next/future/image";
import { useTranslation } from 'next-i18next';

import logo from '../assets/img/zorroCoinLogo12.png'
import frame from '../assets/img/Frame.webp'
import frame2 from '../assets/img/Frame2.webp'

import frame3 from '../assets/img/Frame3.webp'
import frame4 from '../assets/img/Frame4.webp'

const Ecosystem = () => {
    const { t } = useTranslation();

    return (
        <div className='uk-section uk-margin-remove-top' id='Ecosystem'>
            <div className='uk-container uk-container-xlarge uk-padding-large uk-padding-remove-vertical'>
                <h3 className='uk-heading-medium uk-text-uppercase'>{t("header.Ecosystem")}</h3>
                <p className='uk-margin-remove-top uk-text-white'>{t("Ecosystem.description")}
                    &quot;{t("Ecosystem.description-comma")}&quot;
                    {t("Ecosystem.description-3")}
                </p>
                <div className='uk-text-center'>
                    <a className='uk-button uk-button-purple uk-button-large'>{t("Ecosystem.whitepaper")}</a>
                </div>
                <div className='uk-grid uk-grid-medium uk-grid-match uk-margin-medium-top' data-uk-grid>
                    <div className='uk-width-1-3@s'>
                        <div className='uk-card uk-card-border-green uk-padding-small uk-text-center'>
                            <h3 className='uk-text-bolder uk-text-white-h3'>{t("Ecosystem.card-1.title")}</h3>
                            <Img className='purple-glow' src={logo} alt="ZorroCoin liquidity" width={200} height={200} quality={100} decoding='async' />
                            <p className='uk-text-white uk-margin-small-bottom'>{t("Ecosystem.card-1.description")}</p>
                        </div>
                    </div>
                    <div className='uk-width-1-3@s'>
                        <div className='uk-card uk-card-border-green uk-padding-small uk-text-center'>
                            <h3 className='uk-text-bolder uk-text-white-h3'>{t("Ecosystem.card-2.title")}</h3>
                            <Img className='purple-glow' src={frame2} alt="ZorroCoin global" width={170} height={170} quality={100} decoding='async' />
                            <p className='uk-text-white uk-margin-small-bottom'>{t("Ecosystem.card-2.description")}</p>
                        </div>
                    </div>
                    <div className='uk-width-1-3@s'>
                        <div className='uk-card uk-card-border-green uk-padding-small uk-text-center'>
                            <h3 className='uk-text-bolder uk-text-white-h3'>{t("Ecosystem.card-3.title")}</h3>
                            <Img className='purple-glow' src={frame} alt="ZorroCoin blockchain" width={200} height={200} quality={100} decoding='async' />
                            <p className='uk-text-white uk-margin-small-bottom'>{t("Ecosystem.card-3.description")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='uk-container uk-container-xlarge uk-padding-large uk-padding-remove-vertical uk-margin-large-top'>
                <div className='uk-card uk-card-border-purple uk-padding-small uk-text-center'>
                    <h3 className='uk-heading-medium'>{t("Ecosystem.event-1.title")}</h3>
                    <p className='uk-heading-small uk-green-gradient'>{t("Ecosystem.status")}</p>
                    <Img className='hero-img' src={frame3} alt="ZorroCoin liquidity campaing" width={225} height={225} quality={100} decoding='async' />
                    <h3 className='uk-text-bolder uk-text-white-h3 uk-margin-small-top'>{t("Ecosystem.event-1.description")}</h3>
                </div>
            </div>
            <div className='uk-container uk-container-xlarge uk-padding-large uk-padding-remove-vertical uk-margin-large-top'>
                <div className='uk-card uk-card-border-purple uk-padding-small uk-text-center'>
                    <h3 className='uk-heading-medium'>{t("Ecosystem.event-2.title")}</h3>
                    <p className='uk-heading-small uk-green-gradient'>{t("Ecosystem.status")}</p>
                    <Img className='hero-img' src={frame4} alt="ZorroCoin Initial Coin Offering" width={225} height={225} quality={100} decoding='async' />
                    <h3 className='uk-text-bolder uk-text-white-h3 uk-margin-small-top'>{t("Ecosystem.event-2.description")}</h3>
                </div>
            </div>
        </div>
    )
}

export default Ecosystem;