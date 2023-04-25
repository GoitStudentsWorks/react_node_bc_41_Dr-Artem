import React from 'react';
import logo_footer_mobile from '../../images/logo/logo_footer_mobile.png';
import logo_footer_desk from '../../images/logo/logo_footer_desk.png';
import s from '../Logo/Logo.module.css';

function LogoFooter() {
    return (
        <a href="#">
            <img className={s.logo_mobile} src={logo_footer_mobile} alt="logo" />
            <img className={s.logo_desk} src={logo_footer_desk} alt="logo" />
        </a>
    );
}

export default LogoFooter;