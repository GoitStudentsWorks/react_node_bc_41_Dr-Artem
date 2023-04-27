import React from 'react';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import css from './WeekVisitsBlock.module.css';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Avatar from '../../Image/Avatar.png';
import { Divider } from '@mui/material';
import { Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const WeekVisitsBlock = () => {
    const [selectedDate, setSelectedDate] = useState(dayjs().format());
    const [isVisitsVisible, setIsVisitsVisible] = useState(true);
    const [open, setOpen] = useState(false);

    const handleArrowClick = () => {
        setIsVisitsVisible(!isVisitsVisible);
    };

    const handlePrevDayClick = () => {
        const newDate = dayjs(selectedDate).subtract(1, 'day');
        setSelectedDate(newDate.format());
    };

    const handleNextDayClick = () => {
        const newDate = dayjs(selectedDate).add(1, 'day');
        setSelectedDate(newDate.format());
    };

    const handleClick = () => {
        setOpen(true);
    };

    return (
        <div className={css.weekVisitsBlock}>
            <div className={css.weekVisitsBlockFlexWrapper}>
                <div className={css.weekVisitsTitleWrapper}>
                    <p className={css.weekVisitsTitle}>Visits for a week </p>
                </div>
                <div className={css.weekVisitsCalendar}>
                    <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                sx={{
                                    padding: '8px 12px',
                                    verticalAlign: 'middle',
                                    '& .MuiInputBase-input': {
                                        border: '1px solid rgba(71, 117, 119, 0.3)',
                                        borderRadius: '10000px',
                                        textAlign: 'center',
                                        fontFamily: 'Manrope',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '1.3',
                                        boxSizing: 'border-box',
                                        margin: 0,
                                        maxWidth: '148px',
                                    },

                                    '& .MuiOutlinedInput-notchedOutline': {
                                        display: 'none',
                                    },
                                    '& .MuiTypography-body1': {
                                        fontFamily: 'Manrope',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        lineHeight: '1.3',
                                    },
                                }}
                                value={dayjs(selectedDate)}
                                format="MMMM DD/MM/YYYY"
                            />
                        </LocalizationProvider>
                    </div>
                    <div className={css.weekVisitsCalendarButtonContainer}>
                        <IconButton onClick={handlePrevDayClick}>
                            <ChevronLeftIcon sx={{ color: '#477577' }} />
                        </IconButton>
                        <Divider
                            sx={{ border: '1px solid rgba(220, 227, 229, 0.5)' }}
                            orientation="vertical"
                            flexItem
                        />
                        <IconButton onClick={handleNextDayClick}>
                            <ChevronRightIcon sx={{ color: '#477577' }} />
                        </IconButton>
                    </div>
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
                                <p className={css.weekVisitsNameCategory}>Patient</p>
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
        </div>
    );
};
