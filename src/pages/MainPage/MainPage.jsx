import { FAQ } from 'components/FAQ/FAQ';

import bag from '../../images/ChosenBlock/bag.png';
import cross from '../../images/ChosenBlock/cross.png';
import line from '../../images/ChosenBlock/line.png';
import tablet from '../../images/ChosenBlock/tablet.png';
import s from './MainPage.module.css';

import Slider from 'components/Slider/Slider';
import card from '../../images/DoctorAppointment/card.png';
import card_mobile from '../../images/DoctorAppointment/card_mobile.png';
import meet from '../../images/DoctorAppointment/meet.png';
import meet_mobile from '../../images/DoctorAppointment/meet_mobile.png';
import phone from '../../images/DoctorAppointment/phone.png';
import phone_mobile from '../../images/DoctorAppointment/phone_mobile.png';

import { SwiperNavButtons } from 'components/SwiperNavBtn/SwiperNavBtn';
import { A11y, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import maria from '../../images/Rewiews/maria.png';
import natalia from '../../images/Rewiews/natalia.png';
import sergey from '../../images/Rewiews/sergey.png';

function MainPage() {
    return (
        <>
            <div className={s.container}>
                <h2 className={s.chosen_header}>We are chosen</h2>
                <div className={s.list_wrapper}>
                    <ul className={s.chosen_list}>
                        <li className={s.chosen_item}>
                            <div className={s.image_wrapper}>
                                <img src={bag} className={s.img} alt="bag"></img>
                            </div>
                            <p className={s.chosen_text}>Quick communication with the clinic and doctors</p>
                        </li>
                        <li className={s.chosen_item}>
                            <div className={s.image_wrapper}>
                                <img src={line} className={s.img} alt="line"></img>
                            </div>
                            <p className={s.chosen_text}>Convenient access to health data</p>
                        </li>
                        <li className={s.chosen_item}>
                            <div className={s.image_wrapper}>
                                <img src={tablet} className={s.img} alt="tablet"></img>
                            </div>
                            <p className={s.chosen_text}>Quick access to recipes</p>
                        </li>
                        <li className={s.chosen_item}>
                            <div className={s.image_wrapper}>
                                <img src={cross} className={s.img} alt="cross"></img>
                            </div>
                            <p className={s.chosen_text}>Make an appointment online or offline</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={s.container}>
                <h2 className={s.doctor_header}>How to make an appointment with a doctor</h2>

                <ul className={s.card_list}>
                    <li className={s.card_wrapper}>
                        <img className={s.phone_img} src={phone} alt="phone" />
                        <img className={s.phone_mobile_img} src={phone_mobile} alt="phone" />
                        <p className={s.card_text}>
                            <span className={s.card_number}>1.</span> Choose a doctor and make an appointment at a
                            convenient time
                        </p>
                    </li>
                    <li className={s.card_wrapper}>
                        <img className={s.meet_img} src={meet} alt="meet" />
                        <img className={s.meet_mobile_img} src={meet_mobile} alt="meet" />
                        <p className={s.card_text}>
                            <span className={s.card_number}>2.</span> Come to the appointment at the specified time
                            without queuing
                        </p>
                    </li>
                    <li className={s.card_wrapper}>
                        <img className={s.card_img} src={card} alt="card" />
                        <img className={s.card_mobile_img} src={card_mobile} alt="card" />
                        <p className={s.card_text}>
                            <span className={s.card_number}>3.</span> Track your medical record and doctor's
                            appointments online
                        </p>
                    </li>
                </ul>
                <div className={s.list_wrapper}>
                    <Slider />
                </div>
            </div>
            <div className={s.container}>
                <h2 className={s.rewiews_header}>Reviews</h2>
                <Swiper
                    spaceBetween={50}
                    // slidesPerView={2}
                    modules={[Navigation, Pagination, A11y]}
                    breakpoints={{
                        375: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1440: {
                            slidesPerView: 3,
                        },
                    }}
                    className={s.list}
                >
                    <div className={s.slide_wrap}>
                        <SwiperSlide className={s.item}>
                            <img className={s.rewiew_img} width={64} height={64} src={maria} alt="" />
                            <p className={s.item_header}>Maria Tkachuk</p>
                            <p className={s.item_text}>
                                I recently used this medical platform to book an appointment with a specialist, and I
                                was impressed by how easy and user-friendly the process was. Highly recommended!
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className={s.item}>
                            <img className={s.rewiew_img} width={64} height={64} src={sergey} alt="" />
                            <p className={s.item_header}>Sergey Rybachok</p>
                            <p className={s.item_text}>
                                I had a great experience using this medical platform to access my health records. This
                                platform is a game-changer for managing my healthcare needs
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className={s.item}>
                            <img className={s.rewiew_img} width={64} height={64} src={natalia} alt="" />
                            <p className={s.item_header}>Natalia Chatuk</p>
                            <p className={s.item_text}>
                                I recently had a virtual appointment with my doctor through this medical platform, and I
                                was pleasantly surprised by how seamless the experience was.
                            </p>
                        </SwiperSlide>
                    </div>

                    <SwiperNavButtons />
                </Swiper>
            </div>
            <FAQ />
        </>
    );
}

export default MainPage;
