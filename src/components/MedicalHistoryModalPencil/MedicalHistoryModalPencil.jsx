import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton, Input, InputLabel, Modal, Typography } from '@mui/material';
import * as React from 'react';
import * as yup from 'yup';
import pen from '../../images/ProfileBlock/pen.svg';
import s from '../MedicalHistoryModalPencil/MedicalHistoryModalPencil.module.css';
import css from '../ProfileBlockPatient/ProfileBlockPatient.module.css';

import { DatePickers } from 'components/DatePickers/DatePickers';

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

function MedicalHistoryModalPencil() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div style={{ display: 'block' }}>
            <Button
                onClick={handleOpen}
                className={css.penButton}
                style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    border: 'none',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    transition: '0.2s ease-in-out 0s',
                }}
            >
                <img src={pen} alt="pen" className={css.penImg} />
            </Button>
            <Modal open={open} onClose={handleClose}>
                <Box sx={style} className={s.box_style} validationSchema={schema}>
                    <div className={s.header_wrapper}>
                        <Typography variant="subtitle" component="p" className={s.header}>
                            Edit profile
                        </Typography>
                        <IconButton onClick={handleClose} className={s.btn_close}>
                            <CloseIcon style={{ display: 'block' }} />
                        </IconButton>
                    </div>
                    <form noValidate autoComplete="off" className={s.input_wrapper}>
                        <ul>
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
                                <DatePickers style={{ width: '100%' }} />
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
                    <Button variant="contained" color="secondary" disableElevation>
                        Save
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}

export default MedicalHistoryModalPencil;
