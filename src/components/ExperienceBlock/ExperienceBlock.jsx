import css from './ExperienceBlock.module.css';
import experienceImg from '../../Image/Experience1.png';

export const ExperienceBlock = () => {
    return (
        <div className={css.experienceBlock}>
            <div className={css.experienceTitleWrapper}>
                <h2 className={css.experienceTitle}>Experience </h2>
                <button className={css.experienceAdd}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9 3V15"
                            stroke="#477577"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M3 9H15"
                            stroke="#477577"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </div>
            <ul className={css.experienceList}>
                <li className={css.experienceListItem}>
                    <div className={css.experienceItemWrapper}>
                        <div className={css.experienceImage}>
                            <img src={experienceImg} alt="Logo" />
                        </div>
                        <div className={css.experienceInfoItem}>
                            <h3 className={css.experienceInfoTitle}>Basic medical sciences</h3>
                            <p className={css.experienceInfoDate}>September 2010 - May 2010 </p>
                            <p className={css.experienceInfoAbout}>The basic medical sciences look at the...</p>
                        </div>
                    </div>
                    <div>
                        <div className={css.buttonEditWrapper}>
                            <button className={css.buttonEdit}>
                                <svg
                                    className={css.buttonEditIcon}
                                    width="13"
                                    height="13"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.334 1.99955C11.5091 1.82445 11.7169 1.68556 11.9457 1.5908C12.1745 1.49604 12.4197 1.44727 12.6673 1.44727C12.9149 1.44727 13.1601 1.49604 13.3889 1.5908C13.6177 1.68556 13.8256 1.82445 14.0007 1.99955C14.1757 2.17465 14.3146 2.38252 14.4094 2.61129C14.5042 2.84006 14.5529 3.08526 14.5529 3.33288C14.5529 3.58051 14.5042 3.8257 14.4094 4.05448C14.3146 4.28325 14.1757 4.49112 14.0007 4.66622L5.00065 13.6662L1.33398 14.6662L2.33398 10.9995L11.334 1.99955Z"
                                        stroke="#477577"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </li>

                <li className={css.experienceListItem}>
                    <div className={css.experienceItemWrapper}>
                        <div className={css.experienceImage}>
                            <img src={experienceImg} alt="Logo" />
                        </div>
                        <div className={css.experienceInfoItem}>
                            <h3 className={css.experienceInfoTitle}>Basic medical sciences</h3>
                            <p className={css.experienceInfoDate}>September 2010 - May 2010 </p>
                            <p className={css.experienceInfoAbout}>The basic medical sciences look at the...</p>
                        </div>
                    </div>
                    <div>
                        <div className={css.buttonEditWrapper}>
                            <button className={css.buttonEdit}>
                                <svg
                                    className={css.buttonEditIcon}
                                    width="13"
                                    height="13"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.334 1.99955C11.5091 1.82445 11.7169 1.68556 11.9457 1.5908C12.1745 1.49604 12.4197 1.44727 12.6673 1.44727C12.9149 1.44727 13.1601 1.49604 13.3889 1.5908C13.6177 1.68556 13.8256 1.82445 14.0007 1.99955C14.1757 2.17465 14.3146 2.38252 14.4094 2.61129C14.5042 2.84006 14.5529 3.08526 14.5529 3.33288C14.5529 3.58051 14.5042 3.8257 14.4094 4.05448C14.3146 4.28325 14.1757 4.49112 14.0007 4.66622L5.00065 13.6662L1.33398 14.6662L2.33398 10.9995L11.334 1.99955Z"
                                        stroke="#477577"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </li>
                <li className={css.experienceListItem}>
                    <div className={css.experienceItemWrapper}>
                        <div className={css.experienceImage}>
                            <img src={experienceImg} alt="Logo" />
                        </div>
                        <div className={css.experienceInfoItem}>
                            <h3 className={css.experienceInfoTitle}>Basic medical sciences</h3>
                            <p className={css.experienceInfoDate}>September 2010 - May 2010 </p>
                            <p className={css.experienceInfoAbout}>The basic medical sciences look at the...</p>
                        </div>
                    </div>
                    <div>
                        <div className={css.buttonEditWrapper}>
                            <button className={css.buttonEdit}>
                                <svg
                                    className={css.buttonEditIcon}
                                    width="13"
                                    height="13"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.334 1.99955C11.5091 1.82445 11.7169 1.68556 11.9457 1.5908C12.1745 1.49604 12.4197 1.44727 12.6673 1.44727C12.9149 1.44727 13.1601 1.49604 13.3889 1.5908C13.6177 1.68556 13.8256 1.82445 14.0007 1.99955C14.1757 2.17465 14.3146 2.38252 14.4094 2.61129C14.5042 2.84006 14.5529 3.08526 14.5529 3.33288C14.5529 3.58051 14.5042 3.8257 14.4094 4.05448C14.3146 4.28325 14.1757 4.49112 14.0007 4.66622L5.00065 13.6662L1.33398 14.6662L2.33398 10.9995L11.334 1.99955Z"
                                        stroke="#477577"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </li>
                <li className={css.experienceListItem}>
                    <div className={css.experienceItemWrapper}>
                        <div className={css.experienceImage}>
                            <img src={experienceImg} alt="Logo" />
                        </div>
                        <div className={css.experienceInfoItem}>
                            <h3 className={css.experienceInfoTitle}>Basic medical sciences</h3>
                            <p className={css.experienceInfoDate}>September 2010 - May 2010 </p>
                            <p className={css.experienceInfoAbout}>The basic medical sciences look at the...</p>
                        </div>
                    </div>
                    <div>
                       
                            <button className={css.buttonEdit}>
                                <svg
                                    className={css.buttonEditIcon}
                                    width="13"
                                    height="13"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.334 1.99955C11.5091 1.82445 11.7169 1.68556 11.9457 1.5908C12.1745 1.49604 12.4197 1.44727 12.6673 1.44727C12.9149 1.44727 13.1601 1.49604 13.3889 1.5908C13.6177 1.68556 13.8256 1.82445 14.0007 1.99955C14.1757 2.17465 14.3146 2.38252 14.4094 2.61129C14.5042 2.84006 14.5529 3.08526 14.5529 3.33288C14.5529 3.58051 14.5042 3.8257 14.4094 4.05448C14.3146 4.28325 14.1757 4.49112 14.0007 4.66622L5.00065 13.6662L1.33398 14.6662L2.33398 10.9995L11.334 1.99955Z"
                                        stroke="#477577"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                  
                </li>
            </ul>
        </div>
    );
};
