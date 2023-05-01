import { useState } from 'react';
import { Box, IconButton, Modal, TextField, Button, Input } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import css from '../EditDoctorProfile/EditDoctorProfile.module.css';

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

const EditDoctorProfile = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const handleSubmit = event => {
        event.preventDefault();
        console.log('Profile submitted');
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <form className={css.formWrapper} onSubmit={handleSubmit}>
                    <div className={css.contentWrapper}>
                        <div className={css.titleWrapper}>
                            <h2 className={css.title}>Edit Profile</h2>
                            <IconButton size="small" onClose={handleClose}>
                                <CloseIcon sx={{ width: '12px', height: '12px', color: 'text.black' }} />
                            </IconButton>
                        </div>
                        <Input />
                        <Input />
                        <Input />
                        <Input />
                        <TextField  multiline/> 
                        <Button
                            sx={{ width: { sm: '78px', md: '99px' }, height: { sm: '38px', md: '46px' } }}
                            type="submit"
                            variant="contained"
                            color="secondary"
                        >
                            SAVE
                        </Button>
                    </div>
                </form>
            </Box>
        </Modal>
    );
};

export default EditDoctorProfile;
