import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton, Input, InputLabel, Modal, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { useState } from 'react';
import css from '../EditDoctorProfileModal/EditDoctorProfileModule.module.css';

const style = {
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

const EditDoctorProfileModal = ({ open, setApp }) => {
    const [selectedDate, setSelectedDate] = useState(dayjs);

    function handleDateChange(date) {
        setSelectedDate(date);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const formData = new FormData(event.target);

        if (selectedDate) {
            formData.append('date', selectedDate.format('MM/DD/YYYY'));
        }

        const data = {
            name: formData.get('name'),
            gender: formData.get('gender'),
            date: formData.get('date'),
            phone: formData.get('phone'),
            about: formData.get('about'),
        };
        console.log(data);
    };

    return (
        <Modal open={open} onClose={() => setApp(!open)}>
            <Box sx={style}>
                <div className={css.titleWrapper}>
                    <Typography variant="subtitle" component="p">
                        Edit profile
                    </Typography>
                    <IconButton onClick={() => setApp(!open)} size="small">
                        <CloseIcon sx={{ width: '24px', height: '24px', color: 'text.black' }} />
                    </IconButton>
                </div>
                <form onSubmit={handleSubmit}>
                    <ul className={css.inputList}>
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
                                value="Artem"
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
                            <InputLabel variant="standard" color="primary" htmlFor="date">
                                Date of birth
                            </InputLabel>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                                Phone number
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
                        <li>
                            <InputLabel variant="standard" color="primary" htmlFor="about">
                                About
                            </InputLabel>
                            <Input
                                variant="primary"
                                color="primary"
                                type="text"
                                disableUnderline
                                id="about"
                                name="about"
                                multiline
                                rows={4}
                                placeholder="Enter your text"
                            />
                        </li>
                    </ul>
                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        onClick={() => setApp(!open)}
                        sx={{ p: { md: '13px 32px' }, marginTop: '32px' }}
                    >
                        Save
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

export default EditDoctorProfileModal;
