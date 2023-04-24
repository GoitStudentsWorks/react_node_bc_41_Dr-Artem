import plug from '../../images/ProfileBlock/plug.png';
import pen from '../../images/ProfileBlock/pen.svg';
import check from '../../images/ProfileBlock/check.svg';
import css from './ProfileBlockDoctore.module.css';
import StarRating from 'components/StarRating/StarRating';

export const ProfileBlockDoctore = () => {
    return (
        <div className={css.wrapper}>
            <p className={css.role}>Doctor</p>
            <StarRating />
            <div className={css.imgWrapper}>
                <img src={plug} alt="plug" className={css.photo} />
                <button className={css.photoButton}>
                    <img src={check} alt="chenging" />
                </button>
            </div>
            <div className={css.bottomWrapper}>
                <ul className={css.list}>
                    <li className={css.item}>
                        Name:<p className={css.data}>Shumeiko Timur Bohdanovich</p>
                    </li>
                    <li className={css.item}>
                        Gender:<p className={css.data}>Male</p>
                    </li>
                    <li className={css.item}>
                        Date of birth:<p className={css.data}>12/05/1992</p>
                    </li>
                    <li className={css.item}>
                        Phone number:<p className={css.data}>+380 (97) 77 77 7 77</p>
                    </li>
                    <li className={css.item}>
                        Price:<p className={css.data}>750 UAH /1 hour</p>
                    </li>
                </ul>
            </div>
            <span className={css.penWrapper}>
                <button type="button" className={css.penButton}>
                    Edite profile
                    <img src={pen} alt="pen" className={css.penImg} />
                </button>
            </span>
        </div>
    );
};
