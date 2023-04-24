import React from 'react';
import { Link } from 'react-router-dom';
import logo_desk from '../../images/logo/logo_desc.png';
import logo_mobile from '../../images/logo/logo_mobile.png';
import s from '../Logo/Logo.module.css';

function Logo() {
    return (
        <Link to="/">
            <img className={s.logo_mobile} src={logo_mobile} alt="logo" />
            <img className={s.logo_desk} src={logo_desk} alt="logo" />
        </Link>
    );
}

export default Logo;
