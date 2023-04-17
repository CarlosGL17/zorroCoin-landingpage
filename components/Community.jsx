import Img from "next/future/image";
import { useTranslation } from 'next-i18next';

import logo from '../assets/img/zorroCoinLogo12.png'
import facebookLogo from '../assets/img/facebook-logo-2019.svg'
import twitterLogo from '../assets/img/twitter.svg'
import redditLogo from '../assets/img/reddit-logo-2436.svg'
import telegramLogo from '../assets/img/telegram.svg'
const Community = () => {
    const { t } = useTranslation();

    return (
        <div className='uk-section uk-margin-remove-top' id='Community'>
            <div className='uk-container uk-container-xlarge uk-padding-large uk-padding-remove-vertical'>
                <h3 className='uk-heading-medium uk-text-uppercase'>{t("header.Community")}</h3>
                <h3 className='uk-heading-small uk-text-bolder uk-margin-remove-top'>{t("Community.header-1")}</h3>
                <div className='uk-grid uk-grid-small uk-flex-center uk-grid-match' data-uk-grid>
                    {
                        t("Community.members", { returnObjects: true }).map((member, index) => {
                            return (
                                <div className='uk-width-1-4@l  uk-width-1-2@s' key={index}>
                                    <div className='uk-card uk-card-border-purple uk-padding-small uk-text-center'>
                                        <h3 className='uk-text-bolder uk-text-white-h3 uk-margin-remove-bottom'>{member.name}</h3>
                                        <p className='uk-icon-green uk-margin-remove-top uk-margin-small-bottom'>{member.position}</p>
                                        <Img className='purple-glow uk-margin-small-bottom' src={logo} alt="ZorroCoin member" width={150} height={150} quality={100} decoding='async' />
                                        <p className='uk-text-white uk-margin-remove-top uk-margin-small-bottom'>{member.rol}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <h3 className='uk-heading-small uk-text-bolder uk-margin-medium-top'>{t("Community.header-2")}</h3>
                <div className='uk-grid uk-grid-small uk-margin-small-bottom uk-flex-center uk-text-center' data-uk-grid>
                    <div className='uk-width-1-6@m uk-width-1-2@s'>
                        <a className='uk-button-text uk-glow-facebook' href='https://www.facebook.com/profile.php?id=100087399623431' target="_blank" rel="noopener noreferrer">
                            <Img src={facebookLogo} alt="Facebook logo" width={120} height={120} quality={100} decoding='async' />
                            <p className='uk-text-white '>ZorroCoin</p>
                        </a>
                    </div>
                    <div className='uk-width-1-6@m uk-width-1-2@s'>
                        <a className='uk-button-text uk-glow-twitter' href='https://twitter.com/EcoZorrocoin' target="_blank" rel="noopener noreferrer">
                            <Img src={twitterLogo} alt="Twitter logo" width={120} height={120} quality={100} decoding='async' />
                            <p className='uk-text-white'>@Eco_zorrocoin</p>
                        </a>
                    </div>
                    <div className='uk-width-1-6@m uk-width-1-2@s'>
                        <a className='uk-button-text uk-glow-reddit' href='https://www.reddit.com/r/zorrocoin' target="_blank" rel="noopener noreferrer">
                            <Img src={redditLogo} alt="Reddit logo" width={120} height={120} quality={100} decoding='async' />
                            <p className='uk-text-white'>r/zorrocoin</p>
                        </a>
                    </div>
                    <div className='uk-width-1-6@m uk-width-1-2@s'>
                        <a className='uk-button-text uk-glow-telegram' href='https://t.me/zorrocoineco' target="_blank" rel="noopener noreferrer">
                            <Img src={telegramLogo} alt="Telegram logo" width={120} height={120} quality={100} decoding='async' />
                            <p className='uk-text-white'>t.me/zorrocoineco</p>
                        </a>
                    </div>
                </div>
                <hr className='uk-hr-purple' />
                <div className='uk-grid uk-grid-small uk-flex-center uk-margin-remove-bottom' data-uk-grid>
                    <div className='uk-width-1-2@s'>
                        <a className='uk-button-text' href='mailto:zorros@zorrocoin.tech'>
                            <h3 className='uk-text-white-h3'>zorros@zorrocoin.tech</h3>
                        </a>
                    </div>
                    <div className='uk-width-1-2@s uk-text-right'>
                        <h3 className='uk-text-white-h3'>Copyright © 2023 ZorroCoin</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community;