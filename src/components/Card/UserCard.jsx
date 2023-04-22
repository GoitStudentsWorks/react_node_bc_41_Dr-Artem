import pic from './pic.png';
import css from './UserCard.module.css';
const UserCard = ({ newPermanent, name, gender, birth, phone, photo, button }) => {
    return (
        <div style={{ height: button ? '396px' : '480px', width: button ? '379px' : '384px' }} className={css.userCard}>
            <div>
                <span className={css.cardRole}>Permanent</span>
            </div>
            <div className={css.cardImageBox}>
                <img src={pic} alt="photo" />
            </div>
            <ul>
                <li className={css.cardItem}>
                    Name: <b>name</b>
                </li>
                <li className={css.cardItem}>
                    Gender: <b>gender</b>
                </li>
                <li className={css.cardItem}>
                    Date of birth: <b>birth</b>
                </li>
                <li className={css.cardItem}>
                    Phone number: <b>phone</b>
                </li>
            </ul>
            {!button && <button className={css.cardBtn}>VIEW PROFILE</button>}
        </div>
    );
};

export default UserCard;
