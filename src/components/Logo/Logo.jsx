import React from 'react';
import logo_mobile from '../../images/logo/logo_mobile.png';
import logo_desk from '../../images/logo/logo_desc.png';
import s from '../Logo/Logo.module.css';

function Logo() {
    return (
        <a href="#">
            <img className={s.logo_mobile} src={logo_mobile} alt="logo" />
            <img className={s.logo_desk} src={logo_desk} alt="logo" />
        </a>
    );
}

export default Logo;
