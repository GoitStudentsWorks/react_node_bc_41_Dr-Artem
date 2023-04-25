import { Badge } from 'components/Badge/Badge';
import style from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={style.PatientInfo}>
            <Badge />
            <div className={style.PatientInfo_ImageWrapper}></div>
            <ul className={style.PatientInfo_Details}>
                <li>
                    Name: <span>Melnyk Victoria Petrivna</span>
                </li>
                <li>
                    Gender: <span>Female</span>
                </li>
                <li>
                    Date of birth: <span>02/03/1995</span>
                </li>
                <li>
                    Phone number: <span>+380 (97) 77 77 7 77</span>
                </li>
            </ul>
        </div>
    );
};
