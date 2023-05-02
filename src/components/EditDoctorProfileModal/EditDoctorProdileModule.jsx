import { useState } from 'react';
import { Box, IconButton, Modal, Typography, Button, Input, InputLabel } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
// import { Form, Formik } from 'formik';
// import * as yup from 'yup';
import CloseIcon from '@mui/icons-material/Close';
import css from '../EditDoctorProfileModal/EditDoctorProfileModule.module.css';

// const regex = /^\+\d{1,3}\s?s?\d{1,}\s?\d{1,}\s?\d{1,}$/;

// const schema = yup.object().shape({
//     name: yup
//         .string()
//         .min(3, 'Username must be at least 3 characters')
//         .max(200, 'Username must be less than or equal to 200 characters')
//         .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field ')
//         .required('Username is a required field'),
//     gender: yup.string().required(),
//     date: yup.date().required(),
//     phone: yup.string().matches(regex, 'Phone number is not valid').required('Phone is a required field'),
//     about: yup.string().required(),
// });


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
    const [name, setName] = useState(null);
    const [gender, setGender] = useState(null);
    const [selectedDate, setSelectData] = useState(dayjs);
    const [phone, setPhone] = useState(null);
    const [about, setAbout] = useState(null);

    const handleNameChange = value => setName(value);
    const handleGenderChange = value => setGender(value);
    const handleDateChange = newDate => {
        const formatedDate = newDate.format('DD.MM.YYYY')
        setSelectData(formatedDate)
    };
    const handlePhoneChange = value => setPhone(value);
    const handleAboutChange = value => setAbout(value);


    const handleSubmit = event => {
        event.preventDefault();
        const formData = new FormData(event.target);

        if (selectedDate) {
            formData.append('date', selectedDate.toISOString());
        }
        
        console.log(formData.get('date'));

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
                                value={name}
                                onChange={handleNameChange}
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
                                value={gender}
                                onChange={handleGenderChange}
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
                                Phone number
                            </InputLabel>
                            <Input
                                variant="primary"
                                color="primary"
                                type="tel"
                                disableUnderline
                                id="phone"
                                name="phone"
                                value={phone}
                                onChange={handlePhoneChange}
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
                                value={about}
                                onChange={handleAboutChange}
                            />
                        </li>
                    </ul>
                </form>
                <Button
                    
                    type="submit"
                    variant="contained"
                    color="secondary"
                    sx={{ p: { md: '13px 32px' }, marginTop: '32px' }}
                >
                    Save
                </Button>
            </Box>
        </Modal>
    );
};

export default EditDoctorProfileModal;