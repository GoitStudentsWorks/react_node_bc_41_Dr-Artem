import { UilFileAlt, UilLink, UilTrashAlt } from '@iconscout/react-unicons';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Icon, IconButton, Input, Modal, Typography } from '@mui/material';
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
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalProperty}>
                <div className={style.Modal_HeaderWrapper}>
                    <Typography
                        variant="subtitle"
                        component="p"
                        color="text.black"
                        sx={{ fontSize: { md: '20px', lineHeight: { md: '30px' } } }}
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
                            <p className={style.Modal_FormItemHead}>Doctor</p>
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
        //     <div className={style.Modal}>
        //         <div className={style.Modal_HeaderWrapper}>
        //             <p className={style.Modal_Header}>Edit data</p>
        //             <button type="button" onClick={() => setOpen(false)} className={style.Modal_Close}>
        //                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                     <path
        //                         d="M18 6L6 18"
        //                         stroke="#111111"
        //                         strokeWidth="2"
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                     />
        //                     <path
        //                         d="M6 6L18 18"
        //                         stroke="#111111"
        //                         strokeWidth="2"
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                     />
        //                 </svg>
        //             </button>
        //         </div>
        //         <form className={style.Modal_Form} onSubmit={handleSubmit}>
        //             <ul className={style.Modal_FormList}>
        //                 <li className={style.Modal_FormItem}>
        //                     <p className={style.Modal_FormItemHead}>Doctor</p>
        //                     <input type="text" id="doctor" name="doctor" className={style.Modal_FormInput} />
        //                 </li>
        //                 <li className={style.Modal_FormItem}>
        //                     {/* <p className={style.Modal_FormItemHead}>Date</p>
        //                     <input type="text" id="date" className={style.Modal_FormInput} /> */}
        //                     <LocalizationProvider dateAdapter={AdapterDayjs}>
        //                         <DemoItem label="Date" components={['DatePicker']}>
        //                             <DatePicker
        //                                 sx={{ width: '100%' }}
        //                                 value={selectedDate}
        //                                 onChange={handleDateChange}
        //                             />
        //                         </DemoItem>
        //                     </LocalizationProvider>
        //                 </li>
        //                 <li className={style.Modal_FormItem}>
        //                     <label htmlFor="fileInput" className={style.Modal_FormLabel}>
        //                         <svg
        //                             className={style.Modal_FormUploadIcon}
        //                             width="16"
        //                             height="16"
        //                             viewBox="0 0 16 16"
        //                             fill="none"
        //                             xmlns="http://www.w3.org/2000/svg"
        //                         >
        //                             <g clipPath="url(#clip0_365_657)">
        //                                 <path
        //                                     d="M14.0496 9.45009L6.54961 1.95009C5.29961 0.650092 3.24961 0.650092 1.94961 1.90009C0.649609 3.15009 0.649609 5.25009 1.94961 6.50009L1.99961 6.55009L3.39961 8.00009L4.09961 7.30009L2.64961 5.85009C1.79961 5.00009 1.79961 3.55009 2.64961 2.70009C3.49961 1.85009 4.94961 1.80009 5.79961 2.65009L5.84961 2.70009L13.2996 10.1501C14.1996 11.0001 14.1996 12.4501 13.3496 13.3001C12.4996 14.2001 11.0496 14.2001 10.1996 13.3501L10.1496 13.3001L6.44961 9.60009C5.94961 9.10009 5.99961 8.30009 6.44961 7.85009C6.68931 7.63296 7.00118 7.51271 7.32461 7.51271C7.64804 7.51271 7.95991 7.63296 8.19961 7.85009L10.2496 9.90009L10.9496 9.20009L8.84961 7.10009C8.63675 6.89879 8.38615 6.74161 8.11226 6.63761C7.83837 6.53362 7.54661 6.48486 7.25379 6.49416C6.96096 6.50346 6.67288 6.57062 6.40614 6.69178C6.13939 6.81294 5.89927 6.98569 5.69961 7.20009C4.89961 8.05009 4.89961 9.40009 5.69961 10.3001L9.44961 14.0501C10.6996 15.3501 12.7496 15.3501 14.0496 14.1001C15.3496 12.8501 15.3496 10.7501 14.0496 9.45009C14.0496 9.50009 14.0496 9.45009 14.0496 9.45009Z"
        //                                     fill="#121417"
        //                                 />
        //                             </g>
        //                             <defs>
        //                                 <clipPath id="clip0_365_657">
        //                                     <rect width="16" height="16" fill="white" />
        //                                 </clipPath>
        //                             </defs>
        //                         </svg>
        //                         Click here if you want to add your file
        //                     </label>
        //                     <input
        //                         type="file"
        //                         id="fileInput"
        //                         name="files"
        //                         onChange={handleFileChange}
        //                         className={style.Modal_FormUpload}
        //                     />
        //                 </li>
        //             </ul>
        //             <ul className={style.Modal_Form_UploadedFilesList} id="file-list">
        //                 {files.map(({ name }, index) => (
        //                     <li key={index} className={style.Modal_Form_UploadedFilesItem}>
        //                         <div className={style.Modal_Form_UploadedFilesSubItem}>
        //                             <svg
        //                                 width="16"
        //                                 height="16"
        //                                 viewBox="0 0 16 16"
        //                                 fill="none"
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                             >
        //                                 <path
        //                                     d="M5.52319 12.4236C5.66319 12.3416 5.81619 12.2616 5.98219 12.1856C5.84196 12.3947 5.69179 12.5969 5.53219 12.7916C5.25219 13.1286 5.03419 13.3076 4.89719 13.3636C4.88582 13.3684 4.87412 13.3724 4.86219 13.3756C4.85221 13.3618 4.84351 13.347 4.83619 13.3316C4.78019 13.2216 4.78219 13.1156 4.87619 12.9716C4.98219 12.8066 5.19519 12.6176 5.52319 12.4236ZM7.97819 10.7766C7.85919 10.8016 7.74119 10.8266 7.62219 10.8546C7.79845 10.5093 7.96518 10.1591 8.12219 9.80462C8.28026 10.0975 8.45041 10.3838 8.63219 10.6626C8.41519 10.6946 8.19619 10.7326 7.97819 10.7766ZM10.5032 11.7156C10.3479 11.5903 10.2024 11.4533 10.0682 11.3056C10.2962 11.3106 10.5022 11.3276 10.6802 11.3596C10.9972 11.4166 11.1462 11.5066 11.1982 11.5686C11.2146 11.5859 11.2239 11.6088 11.2242 11.6326C11.2207 11.7032 11.2001 11.7718 11.1642 11.8326C11.144 11.8813 11.1117 11.924 11.0702 11.9566C11.0496 11.9693 11.0252 11.9746 11.0012 11.9716C10.9112 11.9686 10.7432 11.9056 10.5032 11.7156ZM8.27819 6.96962C8.23819 7.21362 8.17019 7.49362 8.07819 7.79862C8.0443 7.68441 8.01461 7.569 7.98919 7.45262C7.91319 7.09962 7.90219 6.82262 7.94319 6.63062C7.98119 6.45362 8.05319 6.38262 8.13919 6.34762C8.18532 6.32729 8.23417 6.31381 8.28419 6.30762C8.29719 6.33762 8.31219 6.39962 8.31619 6.50562C8.32119 6.62762 8.30919 6.78262 8.27819 6.97062V6.96962Z"
        //                                     fill="#477577"
        //                                 />
        //                                 <path
        //                                     fillRule="evenodd"
        //                                     clipRule="evenodd"
        //                                     d="M4 0H9.293C9.5582 5.66374e-05 9.81251 0.105451 10 0.293L13.707 4C13.8945 4.18749 13.9999 4.4418 14 4.707V14C14 14.5304 13.7893 15.0391 13.4142 15.4142C13.0391 15.7893 12.5304 16 12 16H4C3.46957 16 2.96086 15.7893 2.58579 15.4142C2.21071 15.0391 2 14.5304 2 14V2C2 1.46957 2.21071 0.960859 2.58579 0.585786C2.96086 0.210714 3.46957 0 4 0ZM9.5 1.5V3.5C9.5 3.76522 9.60536 4.01957 9.79289 4.20711C9.98043 4.39464 10.2348 4.5 10.5 4.5H12.5L9.5 1.5ZM4.165 13.668C4.255 13.848 4.395 14.011 4.603 14.087C4.81 14.162 5.015 14.127 5.183 14.057C5.501 13.927 5.818 13.621 6.109 13.271C6.442 12.87 6.792 12.344 7.13 11.761C7.78253 11.5676 8.45075 11.4317 9.127 11.355C9.427 11.738 9.737 12.068 10.037 12.305C10.317 12.525 10.64 12.708 10.971 12.722C11.1513 12.7309 11.3298 12.6826 11.481 12.584C11.636 12.483 11.751 12.337 11.835 12.168C11.925 11.987 11.98 11.798 11.973 11.605C11.9667 11.4147 11.8962 11.2322 11.773 11.087C11.547 10.817 11.177 10.687 10.813 10.622C10.3714 10.5536 9.92343 10.5368 9.478 10.572C9.10186 10.0403 8.77389 9.47602 8.498 8.886C8.748 8.226 8.935 7.602 9.018 7.092C9.054 6.874 9.073 6.666 9.066 6.478C9.06476 6.29139 9.02134 6.10747 8.939 5.94C8.89156 5.84758 8.82414 5.76687 8.74164 5.70374C8.65913 5.64061 8.56361 5.59663 8.462 5.575C8.26 5.532 8.052 5.575 7.861 5.652C7.484 5.802 7.285 6.122 7.21 6.475C7.137 6.815 7.17 7.211 7.256 7.611C7.344 8.017 7.494 8.459 7.686 8.906C7.37889 9.6698 7.02419 10.4136 6.624 11.133C6.10864 11.2951 5.61188 11.5114 5.142 11.778C4.772 11.998 4.443 12.258 4.245 12.565C4.035 12.891 3.97 13.279 4.165 13.668Z"
        //                                     fill="#477577"
        //                                 />
        //                             </svg>
        //                             <span className={style.Modal_Form_UploadedFileName}>{name}</span>
        //                         </div>
        //                         <button
        //                             type="button"
        //                             onClick={() => handleFileDelete(index)}
        //                             className={style.Modal_Form_UploadedFileDelete}
        //                         >
        //                             <svg
        //                                 width="22"
        //                                 height="22"
        //                                 viewBox="0 0 22 22"
        //                                 fill="none"
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                             >
        //                                 <path
        //                                     d="M2.75 5.5H4.58333H19.25"
        //                                     stroke="#477577"
        //                                     strokeWidth="1.8"
        //                                     strokeLinecap="round"
        //                                     strokeLinejoin="round"
        //                                 />
        //                                 <path
        //                                     d="M17.4168 5.49967V18.333C17.4168 18.8192 17.2237 19.2856 16.8799 19.6294C16.536 19.9732 16.0697 20.1663 15.5835 20.1663H6.41683C5.9306 20.1663 5.46428 19.9732 5.12047 19.6294C4.77665 19.2856 4.5835 18.8192 4.5835 18.333V5.49967M7.3335 5.49967V3.66634C7.3335 3.18011 7.52665 2.7138 7.87047 2.36998C8.21428 2.02616 8.6806 1.83301 9.16683 1.83301H12.8335C13.3197 1.83301 13.786 2.02616 14.1299 2.36998C14.4737 2.7138 14.6668 3.18011 14.6668 3.66634V5.49967"
        //                                     stroke="#477577"
        //                                     strokeWidth="1.8"
        //                                     strokeLinecap="round"
        //                                     strokeLinejoin="round"
        //                                 />
        //                                 <path
        //                                     d="M9.1665 10.083V15.583"
        //                                     stroke="#477577"
        //                                     strokeWidth="1.8"
        //                                     strokeLinecap="round"
        //                                     strokeLinejoin="round"
        //                                 />
        //                                 <path
        //                                     d="M12.8335 10.083V15.583"
        //                                     stroke="#477577"
        //                                     strokeWidth="1.8"
        //                                     strokeLinecap="round"
        //                                     strokeLinejoin="round"
        //                                 />
        //                             </svg>
        //                         </button>
        //                     </li>
        //                 ))}
        //             </ul>
        //             <button type="submit" className={style.Modal_FormBtn}>
        //                 Save
        //             </button>
        //         </form>
        //     </div>
    );
};
