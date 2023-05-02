import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import React from 'react';
import { useSwiper } from 'swiper/react';
import s from '../SwiperNavBtn/SwiperNavBtn.module.css';

export const SwiperNavButtons = () => {
    const swiper = useSwiper();
    swiper.on('reachBeginning', () => {
        console.log('beg');
    });
    return (
        <div className={s.swiper_nav_btns}>
            <button className={s.btn} onClick={() => swiper.slidePrev()}>
                <WestIcon />
            </button>
            <button className={s.btn} onClick={() => swiper.slideNext()}>
                <EastIcon />
            </button>
        </div>
    );
};
