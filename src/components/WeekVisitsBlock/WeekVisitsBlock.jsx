import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Modal } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Card from 'components/Card/Card';
import { DatePickers } from 'components/DatePickers/DatePickers';
import React, { useState } from 'react';
import Avatar from '../../Image/Avatar.png';
import css from './WeekVisitsBlock.module.css';

export const WeekVisitsBlock = () => {
    const [isVisitsVisible, setIsVisitsVisible] = useState(true);
    const [open, setOpen] = useState(false);

    const handleArrowClick = () => {
        setIsVisitsVisible(!isVisitsVisible);
    };

    const handleClick = () => {
        setOpen(true);
    };

    return (
        <Card>
            <div className={css.weekVisitsBlockFlexWrapper}>
                <div className={css.weekVisitsTitleWrapper}>
                    <p className={css.weekVisitsTitle}>Visits for a week </p>
                </div>
                <div className={css.weekVisitsCalendar}>
                    <div>
                        <DatePickers />
                    </div>

                    {!isVisitsVisible && (
                        <IconButton>
                            <KeyboardArrowDownIcon
                                sx={{ fontSize: '28px', color: '#111111' }}
                                onClick={handleArrowClick}
                            />
                        </IconButton>
                    )}
                    {isVisitsVisible && (
                        <IconButton>
                            <KeyboardArrowUpIcon
                                sx={{ fontSize: '28px', color: '#111111' }}
                                onClick={handleArrowClick}
                            />
                        </IconButton>
                    )}
                </div>
            </div>

            {isVisitsVisible && (
                <div>
                    <ul className={css.weekVisitList}>
                        <li className={css.weekVisitItem} onClick={handleClick}>
                            <div className={css.weekVisitItemInfo}>
                                <img className={css.weekVisitAvatar} src={Avatar} alt="avatar" />
                                <div>
                                    <p className={css.weekVisitsName}>Melnyk Victoria Petrivna</p>
                                    <p className={css.weekVisitsNameCategory}>Patient</p>
                                </div>
                            </div>

                            <div>
                                <p className={css.weekVisitsDateTitle}>Date of visit</p>

                                <div className={css.weekVisitsDateInfoWrapper}>
                                    <div className={css.weekVisitsDateContainer}>
                                        <p className={css.weekVisitsDate}>Date</p>
                                    </div>

                                    <div className={css.weekVisitsTimeContainer}>
                                        <p className={css.weekVisitsTime}>Time</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            )}

            <Modal open={open} onClose={() => setOpen(false)}>
                <div className={css.modalWeekVisit}>
                    <div className={css.modalWeekVisitsTitleWrapper}>
                        <p className={css.modalWeekVisitsTitle}>Doctor's appointment </p>
                        <IconButton>
                            <CloseIcon sx={{ minWidth: '12px', color: '#111111' }} onClick={() => setOpen(false)} />
                        </IconButton>
                    </div>
                    <div className={css.modalWeekVisitItemInfo}>
                        <img className={css.weekVisitAvatar} src={Avatar} alt="avatar" />
                        <div className={css.weekVisitProfile}>
                            <div className={css.modalNameFlex}>
                                <p className={css.weekVisitsName}>Melnyk Victoria Petrivna</p>
                                <p className={css.modalWeekVisitsNameCategory}>Patient</p>
                            </div>
                            <ul>
                                <li className={css.modalWeekVisitItemInfo}>Gender:</li>
                                <li className={css.modalWeekVisitItemInfo}>Date of birth:</li>
                                <li className={css.modalWeekVisitItemInfo}>Phone number:</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <p className={css.weekVisitsDateTitle}>Date of visit</p>

                        <div className={css.weekVisitsDateInfoWrapper}>
                            <div className={css.weekVisitsDateContainer}>
                                <p className={css.weekVisitsDate}>Date</p>
                            </div>

                            <div className={css.weekVisitsTimeContainer}>
                                <p className={css.weekVisitsTime}>Time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </Card>
    );
};
