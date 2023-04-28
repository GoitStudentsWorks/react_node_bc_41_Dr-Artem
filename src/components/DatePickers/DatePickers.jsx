import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers';
import Divider from '@mui/material/Divider';
import dayjs from 'dayjs';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import css from './DatePickers.module.css';

const mobileDatePickerStyles = {
    marginRight: '8px',

    '& .MuiInputBase-input': {
        minWidth: '170px',
        border: '1px solid rgba(71, 117, 119, 0.3)',
        borderRadius: '10000px',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '1.29',
        padding: '6px 16px',
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

export const DatePickers = () => {
    const [selectedDate, setSelectedDate] = useState(dayjs(Date.now()));
    const [selectedMonth, setSelectedMonth] = useState(dayjs(Date.now()).startOf('month'));

    const { pathname } = useLocation();

    const handleDateChange = newDate => {
        setSelectedDate(newDate);
    };

    const handleMonthChange = newDate => {
        setSelectedMonth(dayjs(newDate).startOf('month'));
    };

    if (pathname.startsWith('/doctor/')) {
        const onBackClick = () => {
            const newDate = dayjs(selectedDate).subtract(1, 'day');
            setSelectedDate(newDate);
        };

        const onForwardClick = () => {
            const newDate = dayjs(selectedDate).add(1, 'day');
            setSelectedDate(newDate);
        };
        return (
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
                    <IconButton onClick={onBackClick}>
                        <ArrowBackIosNewIcon
                            sx={{
                                width: '14px',
                                height: '15px',
                            }}

                        />
                    </IconButton>
                    <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                            border: '1px solid rgba(220, 227, 229, 0.5)',
                        }}
                    />
                    <IconButton onClick={onForwardClick} sx={iconButtonStyles}>
                        <ArrowForwardIosIcon
                            sx={{
                                width: '14px',
                                height: '15px',
                            }}
                        />
                    </IconButton>
                </div>
            </div>
        );
    }

    if (pathname === '/patient/visits-history') {
        const onBackClick = () => {
            const newMonth = dayjs(selectedMonth).subtract(1, 'month');
            setSelectedMonth(newMonth);
        };

        const onForwardClick = () => {
            const newMonth = dayjs(selectedMonth).add(1, 'month');
            setSelectedMonth(newMonth);
        };

        return (
            <div className={css.wrapp}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker
                        value={selectedMonth}
                        views={['year', 'month']}
                        minDate={dayjs('2015-01-01')}
                        maxDate={dayjs('2099-12-31')}
                        onChange={handleMonthChange}
                        format={`MMMM D- ${dayjs(selectedMonth).endOf('month').format('D/MM/YYYY')}`}
                        sx={{ ...mobileDatePickerStyles }}
                    />
                </LocalizationProvider>
                <div className={css.btnGrup}>
                    <IconButton onClick={onBackClick}>
                        <ArrowBackIosNewIcon
                            sx={{
                                width: '14px',
                                height: '15px',
                            }}
                        />
                    </IconButton>
                    <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                            border: '1px solid rgba(220, 227, 229, 0.5)',
                        }}
                    />

                    <IconButton onClick={onForwardClick} sx={iconButtonStyles}>
                        <ArrowForwardIosIcon
                            sx={{
                                width: '14px',
                                height: '15px',
                            }}
                        />
                    </IconButton>
                </div>
            </div>
        );
    }
};
