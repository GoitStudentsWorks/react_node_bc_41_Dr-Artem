import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, IconButton, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DatePickers } from 'components/DatePickers/DatePickers';
import dayjs from 'dayjs';
import { selectAppointment } from 'redux/appointment/selectors';
import { getAppointmentById, setAppointment } from 'redux/appointment/operation';
import css from '../ModalDoctorsAppointmentTime/ModalDoctorsAppointmentTime.module.css';
import moment from 'moment';

const timeDates = ['10:00 - 11:30', '12:00 - 13:00', '15:00 - 17:00', '17:00 - 19:00'];

const buttonStyle = {
    padding: { md: '13px 32px' },
};

const modalProperty = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.main',
    outline: 'none',
    borderRadius: '16px',
    p: { sm: '20px', md: '32px' },
    maxWidth: { sm: '335px', md: '500px' },
    width: '100%',
};

export const ModalDoctorsAppointmentTime = ({ open, setOpen, info }) => {
    let disabledTime = []; // зайняті години
    const [selectedDate, setSelectedDate] = useState(dayjs(Date.now()).format('DD.MM.YYYY'));
    const [selectedTime, setSelectedTime] = useState(null);

    const dispatch = useDispatch();

    const doctorAppointments = useSelector(selectAppointment);
    // console.log(doctorAppointments) // всі лікарі

    useEffect(() => {
        if (open) {
            dispatch(getAppointmentById(info.id));
        }
    }, [open]);

    function handleDateChange(date) {
        setSelectedDate(date);
        const filteredForDate = doctorAppointments?.filter(el => moment(el.date).format('MM.DD.YYYY') === date);
        filteredForDate.forEach(item => {
            if (timeDates.includes(item.time)) {
                disabledTime.push(item.time);
                console.log(disabledTime);
            }
        });
        // console.log(filteredForDate) // масив, коли вибираю дату то він пустий а коли години зайняті то приходять обєкти doctorAppointments
    }

    const handleTimeChange = time => {
        setSelectedTime(time.currentTarget.innerText);
    };

    const handleSubmitForm = event => {
        event.preventDefault();

        const data = {
            doctor: info.id,
            specialization: info.specialization || 'dermatology',
            date: selectedDate,
            time: selectedTime,
        };
        dispatch(setAppointment(data));
        setOpen(!open);
    };

    return (
        <Modal open={open} onClose={() => setOpen(!open)}>
            <Box sx={modalProperty}>
                <form onSubmit={handleSubmitForm}>
                    <div className={css.titleWrapp}>
                        <Typography
                            variant="subtitle"
                            component="p"
                            sx={{ fontSize: { md: '20px' }, lineHeight: { md: 1.5 } }}
                        >
                            Doctor's appointment
                        </Typography>
                        <IconButton onClick={() => setOpen(!open)} size="small">
                            <CloseIcon sx={{ width: '24px', height: '24px', color: 'text.black' }} />
                        </IconButton>
                    </div>
                    <Typography
                        variant="text"
                        color="text.gray"
                        component="p"
                        sx={{ fontSize: { md: '16px' }, lineHeight: { md: 1.5 }, mb: { xs: '40px', md: '32px' } }}
                    >
                        Choose the desired appointment time and wait for confirmation{' '}
                    </Typography>
                    <DatePickers value={selectedDate} onDateSelected={handleDateChange} />
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '8px',
                            marginTop: { xs: '20px', md: '16px' },
                            marginBottom: { xs: '20px', md: '32px' },
                        }}
                    >
                        {timeDates?.map(e => {
                            // disabledTime.includes(e) ? (
                            //     <button type="button" disabled key={e} className={css.timeBtnDisable}>
                            //         {e}
                            //     </button>
                            // ) : (
                            //     <button type="button" key={e} className={css.timeBtn} onClick={handleTimeChange}>
                            //         {e}
                            //     </button>
                            // );
                            console.log(e)
                            console.log(disabledTime)
                            if (disabledTime?.includes(e)) {
                            return (
                                <button type="button" disabled key={e} className={css.timeBtnDisable}>
                                    {e}
                                </button>
                            );
                            } else {
                              return (
                                    <button type="button" key={e} className={css.timeBtn} onClick={handleTimeChange}>
                                        {e}
                                    </button>
                                );
                            }
                        })}
                    </Box>
                    <Button type="submit" variant="contained" color="secondary" disableElevation sx={buttonStyle}>
                        send
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};
