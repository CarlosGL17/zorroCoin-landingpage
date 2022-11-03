import Img from "next/future/image";

import Logo from '../assets/img/zorroCoinLogo12.png';

const Navbar = () => {
    return (
        <div data-uk-sticky="sel-target: .uk-container; cls-active: uk-navbar-sticky uk-dark; cls-inactive: uk-light; top: #end;">
            <nav
                style={{
                    width: '100%',
                    position: 'relative',
                    zIndex: 100,
                }}
            >
                <div className="uk-container nav uk-container-expand uk-light">
                    <div data-uk-navbar>
                        <div className="uk-navbar-left">
                            <a className="uk-navbar-item" ><Img src={Logo} alt="" width={50} height={50} quality={100} decoding='async' /></a>
                            <a className="uk-navbar-item uk-logo" href="#">ZORROCOIN</a>
                        </div>
                        <div className="uk-navbar-right">
                            <ul className="uk-navbar-nav">
                                <li className='uk-navbar-item'>
                                    <a className="uk-button-text uk-visible@m">Ecosystem</a>
                                </li>
                                <li className='uk-navbar-item uk-visible@m'>
                                    <a className="uk-button-text">Whitepaper</a>
                                </li>
                                <li className='uk-navbar-item uk-visible@m'>
                                    <a className="uk-button-text">Roadmap</a>
                                </li>
                                <li className='uk-navbar-item uk-visible@s'>
                                    <button className='uk-button uk-button-green'>Contract</button>
                                </li>
                            </ul>
                            <a className="uk-navbar-toggle" data-uk-navbar-toggle-icon href="#offcanvas" data-uk-toggle="target: #offcanvas"></a>
                        </div>
                    </div>
                </div>
            </nav>
            <div id="offcanvas" data-uk-offcanvas="flip: false; overlay: true">
                <div className="uk-offcanvas-bar">
                    <h3 className='uk-text-bold'>DELUXE CLOSETS</h3>
                    <ul className="uk-nav-default uk-nav-parent-icon" data-uk-nav>
                        <li className='uk-button-text uk-width-small' >
                            <a>route</a>
                        </li>
                        <li className="uk-nav-divider uk-margin-top"></li>
                        <li className='uk-button-text uk-width-small'><a href="#"><span className="uk-margin-small-right" data-uk-icon="icon: mail"></span> Mail</a></li>
                        <li className='uk-button-text uk-width-small'><a href="#"><span className="uk-margin-small-right" data-uk-icon="icon: github"></span> Github</a></li>
                        <li className='uk-button-text uk-width-small'><a href="#"><span className="uk-margin-small-right" data-uk-icon="icon: facebook"></span> Facebook</a></li>
                        <li className='uk-button-text uk-width-small'><a href="#"><span className="uk-margin-small-right" data-uk-icon="icon: whatsapp"></span> WhatsApp</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;