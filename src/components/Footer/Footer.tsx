import React from 'react';
import './Footer.css';

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = () => {

    return <section className="footer">
        <div className="footerImgDiv">
            <img className="footerImg" src={`${process.env.PUBLIC_URL}/img/logoMihoyo.png`}></img>
            <img className="footerImg" src={`${process.env.PUBLIC_URL}/img/navLogo.png`}></img>
        </div>

        <div className="footerTextDiv">
            <p className="footerText footerCopyright">Copyright © 2020 miHoYo All Rights Reserved</p>
            <p className="footerText footerTextBody">"PlayStation Family Mark," "PS5 logo" and "PS4 logo" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.
                Epic, Epic Games, Epic Games Store, the Epic Games Store logo, and Epic Online Services are trademarks and/or registered trademarks of Epic Games. All other trademarks are the property of their respective owners.</p>
            <img className="footerLogos" src={`${process.env.PUBLIC_URL}/img/otherLogos.png`}></img>
        </div>
    </section>
}