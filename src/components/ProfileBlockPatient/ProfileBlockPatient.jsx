import * as React from 'react';
import plug from '../../images/ProfileBlock/plug.png';
import pen from '../../images/ProfileBlock/pen.svg';
import check from '../../images/ProfileBlock/check.svg';
import css from './ProfileBlockPatient.module.css';
import MedicalHistoryModalPencil from 'components/MedicalHistoryModalPencil/MedicalHistoryModalPencil';

export const ProfileBlockPatient = () => {
    return (
        <div className={css.wrapper}>
            <p className={css.role}>Patient</p>
            <MedicalHistoryModalPencil type="button" className={css.penButton}>
                <img src={pen} alt="pen" className={css.penImg} />
            </MedicalHistoryModalPencil>

            <div className={css.case}>
                <div className={css.imgWrapper}>
                    <img src={plug} alt="plug" className={css.photo} />
                    <button className={css.photoButton}>
                        <img src={check} alt="chenging" />
                    </button>
                </div>
                <div className={css.bottomWrapper}>
                    <ul className={css.list}>
                        <li className={css.item}>
                            Name:<p className={css.data}>Melnyk Victoria Petrivna</p>
                        </li>
                        <li className={css.item}>
                            Gender:<p className={css.data}>Female</p>
                        </li>
                        <li className={css.item}>
                            Date of birth:<p className={css.data}>02/03/1995</p>
                        </li>
                        <li className={css.item}>
                            Phone number:<p className={css.data}>+380 (97) 77 77 7 77</p>
                        </li>
                    </ul>

                    <button type="submit" className={css.profileButton}>
                        make an appointment
                    </button>
                </div>
            </div>
        </div>
    );
};
