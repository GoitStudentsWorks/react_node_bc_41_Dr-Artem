import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';
import { ExperienceBlock } from 'components/ExperienceBlock/ExperienceBlock';
import React, { useState } from 'react';
import css from './AboutBlock.module.css';

export const AboutBlock = ({ doctorInfo }) => {
    const [isVisitsVisible, setIsVisitsVisible] = useState(true);

    const handleArrowClick = () => {
        setIsVisitsVisible(!isVisitsVisible);
    };

    console.log(doctorInfo.about);

    return (
        <div className={css.aboutBlock}>
            <div className={css.aboutBlockHeadWrapper}>
                <h2 className={css.aboutTitle}>About </h2>
                <div className={css.aboutArrowIcon}>
                    {!isVisitsVisible && (
                        <IconButton>
                            <KeyboardArrowDownIcon
                                sx={{ color: '#111111', fontSize: '28px' }}
                                onClick={handleArrowClick}
                            />
                        </IconButton>
                    )}
                    {isVisitsVisible && (
                        <IconButton>
                            <KeyboardArrowUpIcon
                                sx={{ color: '#111111', fontSize: '28px' }}
                                onClick={handleArrowClick}
                            />
                        </IconButton>
                    )}
                </div>
            </div>

            <div className={css.aboutWrapper}>
                {isVisitsVisible && doctorInfo && (
                    <>
                        <svg
                            className={css.aboutDot}
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="4" cy="4" r="4" fill="#477577" />
                        </svg>

                        <p className={css.aboutText}>{doctorInfo.about}</p>
                    </>
                )}
            </div>
            <ExperienceBlock doctorInfo={doctorInfo} />
        </div>
    );
};
