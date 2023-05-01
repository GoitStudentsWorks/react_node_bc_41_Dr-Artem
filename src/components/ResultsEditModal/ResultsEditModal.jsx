import { UilFileAlt, UilLink, UilTrashAlt } from '@iconscout/react-unicons';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Icon, IconButton, Input, InputLabel, Modal, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { useState } from 'react';
import style from './ResultsEditModal.module.css';

export const ResultsEditModal = ({ open, setOpen }) => {
    const [files, setFiles] = useState([]);
    const [selectedDate, setSelectedDate] = useState(dayjs);

    function handleDateChange(date) {
        setSelectedDate(date);
    }

    const handleFileChange = event => {
        const newFiles = Array.from(event.target.files);

        const uniqueFile = {
            name: newFiles[0].name,
            file: newFiles[0],
        };

        const isFound = files.some(file => file.name === uniqueFile.name);
        if (isFound) {
            return;
        }
        setFiles(prevArray => [...prevArray, uniqueFile]);
    };

    const handleFileDelete = i => {
        setFiles(files.filter((file, index) => index !== i));
    };

    const handleSubmit = event => {
        event.preventDefault();
        const formData = new FormData(event.target);

        if (selectedDate) {
            formData.append('date', selectedDate.toISOString());
        }
        files.forEach(file => {
            formData.append('files[]', JSON.stringify(file));
        });

        console.log(formData.getAll('files[]'));
        console.log(formData.get('doctor'));
        console.log(formData.get('date'));

        // Далее можно отправить данные на сервер, используя методы fetch или axios
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

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Box sx={modalProperty}>
                <div className={style.Modal_HeaderWrapper}>
                    <Typography
                        variant="subtitle"
                        component="p"
                        color="text.black"
                        sx={{ fontSize: { md: '20px' }, lineHeight: { md: 1.5 } }}
                    >
                        Edit data
                    </Typography>
                    <IconButton size="small" onClick={() => setOpen(false)}>
                        <CloseIcon sx={{ width: '24px', height: '24px', color: 'text.black' }} />
                    </IconButton>
                </div>
                <form className={style.Modal_Form} onSubmit={handleSubmit}>
                    <ul className={style.Modal_FormList}>
                        <li className={style.Modal_FormItem}>
                            <InputLabel variant="standard" color="primary" sx={{ mb: '8px' }}>
                                Doctor
                            </InputLabel>
                            <Input
                                variant="primary"
                                color="primary"
                                disableUnderline
                                type="text"
                                id="doctor"
                                name="doctor"
                                className={style.Modal_FormInput}
                            />
                        </li>
                        <li className={style.Modal_FormItem}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoItem label="Date" components={['DatePicker']}>
                                    <DatePicker
                                        sx={{ width: '100%' }}
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                    />
                                </DemoItem>
                            </LocalizationProvider>
                        </li>
                        <li className={style.Modal_FormItem}>
                            <label htmlFor="fileInput" className={style.Modal_FormLabel}>
                                <UilLink style={{ width: '18px', height: '18px', transform: 'rotate(90deg)' }} />
                                Click here if you want to add your file
                            </label>
                            <input
                                type="file"
                                id="fileInput"
                                name="files"
                                onChange={handleFileChange}
                                className={style.Modal_FormUpload}
                            />
                        </li>
                    </ul>
                    <ul className={style.Modal_Form_UploadedFilesList} id="file-list">
                        {files.map(({ name }, index) => (
                            <li key={index} className={style.Modal_Form_UploadedFilesItem}>
                                <div className={style.Modal_Form_UploadedFilesSubItem}>
                                    <Icon sx={{ display: 'flex' }} color="primary">
                                        <UilFileAlt style={{ width: '20px', height: '20px' }} />
                                    </Icon>
                                    <span className={style.Modal_Form_UploadedFileName}>{name}</span>
                                </div>
                                <IconButton size="small" color="primary" onClick={() => handleFileDelete(index)}>
                                    <UilTrashAlt style={{ width: '20px', height: '20px' }} />
                                </IconButton>
                            </li>
                        ))}
                    </ul>
                    <Button variant="contained" color="secondary" disableElevation type="submit">
                        Save
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};
