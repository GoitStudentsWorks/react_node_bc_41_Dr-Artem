import s from '../ChosenBlock/ChosenBlock.module.css';
import bag from '../../images/ChosenBlock/bag.png';
import line from '../../images/ChosenBlock/line.png';
import tablet from '../../images/ChosenBlock/tablet.png';
import cross from '../../images/ChosenBlock/cross.png';

function ChosenBLock() {
    return (
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
    );
}

export default ChosenBLock;
