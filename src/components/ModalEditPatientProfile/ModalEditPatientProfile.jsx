import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton, Input, InputLabel, Modal, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { useState } from 'react';
import * as yup from 'yup';
import s from './ModalEditPatientProfile.module.css';

const regex = /^\+\d{1,3}\s?s?\d{1,}\s?\d{1,}\s?\d{1,}$/;

const schema = yup.object().shape({
    phone: yup.string().matches(regex, 'Phone number is not valid').required('Phone is a required field'),
    // password: yup
    //     .string()
    //     .min(6, 'Password must be at least 6 characters')
    //     .matches(
    //         passwordRules,
    //         'Password must contain at least 8 characters, one uppercase, one number and one special case character'
    //     )
    //     .required('Password is a required field'),
});

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: [335, 500],
    p: 4,
    background: '#FFFFFF',
    boxShadow: '0px 4px 23px rgba(17, 17, 17, 0.05)',
    borderRadius: '16px',
};

const ModalEditPatientProfile = ({ open, setApp }) => {
    const [selectedDate, setSelectedDate] = useState(dayjs);

    function handleDateChange(date) {
        setSelectedDate(date);
    }

    return (
        <Modal open={open} onClose={() => setApp(!open)}>
            <Box sx={style} className={s.box_style} validationSchema={schema}>
                <div className={s.header_wrapper}>
                    <Typography variant="subtitle" component="p">
                        Edit profile
                    </Typography>
                    <IconButton onClick={() => setApp(!open)} size="small">
                        <CloseIcon sx={{ width: '24px', height: '24px', color: 'text.black' }} />
                    </IconButton>
                </div>
                <form noValidate autoComplete="off">
                    <ul className={s.input_wrapper}>
                        <li>
                            <InputLabel variant="standard" color="primary" htmlFor="name">
                                Name
                            </InputLabel>
                            <Input
                                variant="primary"
                                color="primary"
                                disableUnderline
                                type="text"
                                id="name"
                                name="name"
                            />
                        </li>
                        <li>
                            <InputLabel variant="standard" color="primary" htmlFor="gender">
                                Gender
                            </InputLabel>
                            <Input
                                variant="primary"
                                color="primary"
                                disableUnderline
                                type="text"
                                id="gender"
                                name="gender"
                            />
                        </li>
                        <li>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <InputLabel variant="standard" color="primary" htmlFor="date">
                                    Date of birth
                                </InputLabel>
                                <DemoItem id="date" name="date" components={['DatePicker']}>
                                    <DatePicker
                                        sx={{ width: '100%' }}
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                    />
                                </DemoItem>
                            </LocalizationProvider>
                        </li>
                        <li>
                            <InputLabel variant="standard" color="primary" htmlFor="phone">
                                Number
                            </InputLabel>
                            <Input
                                variant="primary"
                                color="primary"
                                type="tel"
                                disableUnderline
                                id="phone"
                                name="phone"
                            />
                        </li>
                    </ul>
                </form>
                <Button variant="contained" color="secondary" disableElevation sx={{ p: { md: '13px 32px' } }}>
                    Save
                </Button>
            </Box>
        </Modal>
    );
};

export default ModalEditPatientProfile;
