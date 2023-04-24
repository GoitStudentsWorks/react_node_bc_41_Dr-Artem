import s from '../DoctorAppointment/DoctorAppointment.module.css';
import card from '../../images/DoctorAppointment/card.png';
import meet from '../../images/DoctorAppointment/meet.png';
import phone from '../../images/DoctorAppointment/phone.png';
import card_mobile from '../../images/DoctorAppointment/card_mobile.png';
import meet_mobile from '../../images/DoctorAppointment/meet_mobile.png';
import phone_mobile from '../../images/DoctorAppointment/phone_mobile.png';
import Slider from 'components/Slider/Slider';

function DoctorAppointment() {
    return (
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
                        <span className={s.card_number}>2.</span> Come to the appointment at the specified time without
                        queuing
                    </p>
                </li>
                <li className={s.card_wrapper}>
                    <img className={s.card_img} src={card} alt="card" />
                    <img className={s.card_mobile_img} src={card_mobile} alt="card" />
                    <p className={s.card_text}>
                        <span className={s.card_number}>3.</span> Track your medical record and doctor's appointments
                        online
                    </p>
                </li>
            </ul>
            <div className={s.list_wrapper}>
                <Slider />
            </div>
        </div>
    );
}

export default DoctorAppointment;
