import css from './AboutBlock.module.css';
import { ExperienceBlock } from 'components/ExperienceBlock/ExperienceBlock';
import React from 'react';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const AboutBlock = () => {
    const [isVisitsVisible, setIsVisitsVisible] = useState(true);
    const handleArrowClick = () => {
        setIsVisitsVisible(!isVisitsVisible);
    };

    return (
        <div className={css.aboutBlock}>
            <div className={css.aboutBlockHeadWrapper}>
                <h2 className={css.aboutTitle}>About </h2>
                <div className={css.aboutArrowIcon}>
                    {!isVisitsVisible && (
                        <IconButton>
                            <KeyboardArrowDownIcon
                                sx={{ color: '#111111', minWidth: '14px' }}
                                onClick={handleArrowClick}
                            />
                        </IconButton>
                    )}
                    {isVisitsVisible && (
                        <IconButton>
                            <KeyboardArrowUpIcon
                                sx={{ color: '#111111', minWidth: '14px' }}
                                onClick={handleArrowClick}
                            />
                        </IconButton>
                    )}
                </div>
            </div>

            <div className={css.aboutWrapper}>
                {isVisitsVisible && (
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
                        <p className={css.aboutText}>
                            Hi, I'm Shumeiko Timur Bohdanovich, a highly skilled surgeon with 8 years of experience in
                            to surgeons. I am committed to providing the highest level of care to my patients and am
                            dedicated to helping them achieve better health and quality of life through surgical
                            interventions. I am passionate about my work and am constantly seeking new and innovative
                            ways to improve patient outcomes and quality of care. Thank you for considering me as your
                            surgeon.
                        </p>
                    </>
                )}
            </div>
            <ExperienceBlock />
        </div>
    );
};
