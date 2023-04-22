import UserCard from '../../Card/UserCard';
import file from './file.png';
import css from './Profile.module.css';

const Profile = () => {
    const files = [1, 2, 3, 4];
    return (
        <div className="patient">
            <UserCard button={'no'} />
            <div className={css.doctor}>
                <p className={css.doctorText}>
                    Doctor: <b className={css.doctorName}>Shumeiko Timur</b>
                </p>
                <p className={css.doctorText}>
                    Date: <b className={css.doctorName}>16/12/2021</b>
                </p>
                <svg
                    className={css.doctorImg}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clip-path="url(#clip0_541_1260)">
                        <path
                            d="M11.334 1.99955C11.5091 1.82445 11.7169 1.68556 11.9457 1.5908C12.1745 1.49604 12.4197 1.44727 12.6673 1.44727C12.9149 1.44727 13.1601 1.49604 13.3889 1.5908C13.6177 1.68556 13.8256 1.82445 14.0007 1.99955C14.1757 2.17465 14.3146 2.38252 14.4094 2.61129C14.5042 2.84006 14.5529 3.08526 14.5529 3.33288C14.5529 3.58051 14.5042 3.8257 14.4094 4.05448C14.3146 4.28325 14.1757 4.49112 14.0007 4.66622L5.00065 13.6662L1.33398 14.6662L2.33398 10.9995L11.334 1.99955Z"
                            stroke="#477577"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_541_1260">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <ul className={css.filesList}>
                    {files.map(el => (
                        <li className={css.filesItem}>
                            <img className={css.filesImg} src={file} alt="file" />
                            <a href="#" className={css.fileName}>
                                Urine analysis is general <span>{el}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div></div>
        </div>
    );
};

export default Profile;
