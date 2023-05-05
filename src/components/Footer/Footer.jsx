import React, { useState } from 'react';
import FacebookIcon from '../../images/FooterIcons/FacebookIcon';
import InstagramIcon from '../../images/FooterIcons/InstagramIcon';
import YoutubeIcon from '../../images/FooterIcons/YoutubeIcon';
import s from './Footer.module.css';
import LogoFooter from './LogoFooter';
import IconButton from '@mui/material/IconButton';
import { UilInstagram } from '@iconscout/react-unicons';
import { UilFacebookF } from '@iconscout/react-unicons';
import { AiOutlineYoutube } from 'react-icons/ai';
import { useAuth } from 'hooks';
import { ModalMakeAppointment } from 'components/ModalMakeAppointment/ModalMakeAppointment';
import { useNavigate } from 'react-router-dom';

const iconButtonStyles = {
    width: { xs: '40px', md: '56px' },
    height: { xs: '40px', md: '56px' },
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '6px',
    '&:hover, &:focus, &:active, &:disabled': {
        backgroundColor: '#477577',
        boxShadow: 'none',
    },
    '& .MuiIconButton-label': {
        transition: 'none',
    },
};

export const Footer = () => {
    const [modalAppointment, setModalAppointment] = useState(false);

    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const handleClick = () => {
        isLoggedIn ? setModalAppointment(!modalAppointment) : navigate('/auth/login');
    };
    return (
        <div className={s.section}>
            <div className={s.box}>
                <div className={s.container}>
                    <div className={s.firstpart}>
                        <LogoFooter className={s.logoFooter} />
                        <p className={s.title}>Choose a doctor and make an appointment at a convenient time</p>
                        <button type="button" onClick={handleClick} className={s.btn}>
                            make an appointment
                        </button>
                    </div>

                    <div className={s.secondpart}>
                        <ul className={s.iconlist}>
                            <li className={s.listitem}>
                                <IconButton aria-label="delete" sx={iconButtonStyles} disableTouchRipple={true}>
                                    <UilFacebookF className={s.iconStyles} />
                                </IconButton>
                            </li>

                            <li className={s.listitem}>
                                <IconButton aria-label="delete" sx={iconButtonStyles} disableTouchRipple={true}>
                                    <AiOutlineYoutube className={s.iconStyles} />
                                </IconButton>
                            </li>

                            <li className={s.listitem}>
                                <IconButton aria-label="delete" sx={iconButtonStyles} disableTouchRipple={true}>
                                    <UilInstagram className={s.iconStyles} />
                                </IconButton>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={s.footerbottom}>
                <p className={s.footerdesc}>
                    © Meddoc, 2022 The use of materials is allowed only if there is an active link to the source
                </p>
            </div>
            <ModalMakeAppointment open={modalAppointment} setApp={setModalAppointment} />
        </div>
    );
};

export default Footer;
