import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker, DatePicker } from '@mui/x-date-pickers';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import css from './DatePickers.module.css';
import Divider from '@mui/material/Divider';


const mobileDatePickerStyles = {
    marginRight: '8px',
    '& .css-1lugbff-MuiPickersLayout-root': {
      display: 'block!important',
  },
    '& .MuiInputBase-input': {
        border: '1px solid rgba(71, 117, 119, 0.3)',
        borderRadius: '10000px',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '1.3',
        padding: '8px 16px',
        color: ' #111111',
        cursor: 'pointer',
        '&:hover, &:focus': {
            borderColor: '#477577',
        },
    },

    '& .MuiOutlinedInput-notchedOutline': {
        display: 'none',
    },
};

const iconButtonStyles = {
    color: '#477577',
    '&:hover, &:focus': {
        color: '#f3672b',
        backgroundColor: 'transparent',
    },
};

const disabledIconButtonStyles = {
    color: '#DCE3E5',
    '&:hover, &:focus': {
        backgroundColor: 'transparent',
        color: '#DCE3E5',
    },
};

export const DatePickers = () => {
    const [isToday, setIsToday] = useState(true);
    const [selectedDate, setSelectedDate] = useState(dayjs(Date.now()));
    const [value, setValue] = useState(null);
    const { pathname } = useLocation();

    useEffect(() => {
        const currentDate = dayjs(Date.now());

        setSelectedDate(prevDate => {
            if (prevDate <= currentDate) {
                setIsToday(true);
            } else {
                setIsToday(false);
            }
            return prevDate;
        });
    }, []);

    const handleDateChange = newDate => {
        const currentDate = dayjs(Date.now());

        if (newDate <= currentDate) {
            setIsToday(true);
            setSelectedDate(currentDate);
        } else {
            setSelectedDate(newDate);
            setIsToday(false);
        }
    };

    const onBackClick = () => {
        const currentDate = dayjs(Date.now());
        const newDate = dayjs(selectedDate).subtract(1, 'day');

        if (newDate <= currentDate) {
            setIsToday(true);
            setSelectedDate(currentDate);
        } else {
            setSelectedDate(newDate);
            setIsToday(false);
        }
    };

    const onForwardClick = () => {
        const newDate = dayjs(selectedDate).add(1, 'day');

        setSelectedDate(newDate);
        setIsToday(false);
    };

    return (
        <>
            {pathname === '/patient/visits-history' || pathname === '/doctor/patients-list/:id' ? (
                <div className={css.wrapp}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileDatePicker
                            value={selectedDate}
                            onChange={handleDateChange}
                            format="MMMM - DD/MM/YYYY"
                            sx={{ ...mobileDatePickerStyles }}
                        />
                    </LocalizationProvider>
                    <div className={css.btnGrup}>
                        <IconButton
                            disabled={isToday}
                            onClick={onBackClick}
                            sx={isToday ? disabledIconButtonStyles : iconButtonStyles}
                        >
                            <ArrowBackIosNewIcon />
                        </IconButton>
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                                border: '1px solid rgba(220, 227, 229, 0.5)',
                            }}
                        />

                        <IconButton onClick={onForwardClick} sx={iconButtonStyles}>
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </div>
                </div>
            ) : (
                <div>
                    <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        sx={{ border: '1px solid rgba(17, 17, 17, 0.1)', borderRadius: '8px' }}
                    >
                        <DatePicker value={value} onChange={newValue => setValue(newValue)} />
                    </LocalizationProvider>
                </div>
            )}
        </>
    );
};
