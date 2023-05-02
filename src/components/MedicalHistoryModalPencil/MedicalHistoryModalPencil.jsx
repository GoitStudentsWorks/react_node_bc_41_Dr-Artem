import * as React from 'react';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
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
        <div>
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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className={s.box_style} validationSchema={schema}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <div className={s.header_wrapper}>
                            <p className={s.header}>Edit profile</p>
                            <button onClick={handleClose} className={s.btn_close}>
                                <CloseIcon style={{ display: 'block' }} />
                            </button>
                        </div>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1 },
                            }}
                            noValidate
                            autoComplete="off"
                            className={s.input_wrapper}
                        >
                            <TextField id="outlined-basic" label="Name" variant="outlined"></TextField>
                            <TextField id="outlined-basic" label="Gender" variant="outlined" />
                            <DatePickers />
                            <TextField id="outlined-basic" label="Phone number" variant="outlined" />
                        </Box>
                    </Typography>
                    <Button variant="contained" color="secondary">
                        Save
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}

export default MedicalHistoryModalPencil;
