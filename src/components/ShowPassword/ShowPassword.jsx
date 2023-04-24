import css from '../../components/ShowPassword/ShowPassword.module.css';
import { BsFillEyeFill } from 'react-icons/bs';
import { BsFillEyeSlashFill } from 'react-icons/bs';

const ShowPassword = ({ isShown, clickHandler }) => {
    return (
        <button type="button" onClick={clickHandler} className={css.eyeBtn}>
            {isShown ? <BsFillEyeFill className={css.showIcon}/> : <BsFillEyeSlashFill className={css.hideIcon}/>}
        </button>
    );
};

export default ShowPassword;
