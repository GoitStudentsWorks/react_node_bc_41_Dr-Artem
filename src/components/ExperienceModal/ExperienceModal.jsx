import { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Input } from '@mui/material';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import css from './ExperienceModal.module.css';

const institutionData = [
    {
        name: 'Harvard Medical School',
        address: '25 Shattuck St, Boston, MA 02115, United States',
        phone: '(617) 432-1000',
        image: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1682010159/Med-back/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_bijhvy.png',
    },
    {
        name: 'Johns Hopkins School of Medicine',
        address: '733 N Broadway, Baltimore, MD 21205, United States',
        phone: '(410) 955-5000',
        image: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1682010159/Med-back/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_1_ta3d36.png',
    },
    {
        name: 'Stanford University School of Medicine',
        address: '291 Campus Dr, Stanford, CA 94305, United States',
        phone: '(650) 723-6861',
        image: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1682010159/Med-back/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_ftkoak.jpg',
    },
    {
        name: 'Yale School of Medicine',
        address: '333 Cedar St, New Haven, CT 06510, United States',
        phone: '(203) 785-4672',
        image: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1682010159/Med-back/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_2_hjyetd.png',
    },
    {
        name: 'Columbia University Vagelos College of Physicians and Surgeons',
        address: '630 W 168th St, New York, NY 10032, United States',
        phone: '(212) 305-2500',
        image: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1682010158/Med-back/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_1_sodzqb.jpg',
    },
    {
        name: 'Perelman School of Medicine at the University of Pennsylvania',
        address: '3400 Civic Center Blvd, Philadelphia, PA 19104, United States',
        phone: '(215) 662-4000',
        image: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1682010158/Med-back/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_3_kuhghl.png',
    },
    {
        name: 'David Geffen School of Medicine at UCLA',
        address: '10833 Le Conte Ave, Los Angeles, CA 90095, United States',
        phone: '(310) 825-9111',
        image: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1682010158/Med-back/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_4_wahgsy.png',
    },
    {
        name: 'University of Michigan Medical School',
        address: '5301 E Huron River Dr, Ann Arbor, MI 48105, United States',
        phone: '(734) 647-5600',
        image: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1682010158/Med-back/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_5_utolcf.png',
    },
    {
        name: 'Duke University School of Medicine',
        address: 'Duke University, Durham, NC 27710, United States',
        phone: '(919) 684-8111',
        image: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1682010158/Med-back/images_1_pa1z5a.jpg',
    },
    {
        name: 'Baylor College of Medicine',
        address: '1 Baylor Plaza, Houston, TX 77030, United States',
        phone: '(713) 798-4951',
        image: 'https://res.cloudinary.com/dec1shvoo/image/upload/v1682010158/Med-back/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_2_tohlev.jpg',
    },
];

const buttonStyle = {
    padding: { xs: '12px 24px', md: '13px 32px' },
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

const inputStyles = {
    '.MuiOutlinedInput-root ': {
        padding: '14px 18px',
        borderRadius: '8px',
        '& .MuiAutocomplete-input': { padding: '0px' },
    },
};

const datePickerStyles ={
    '& .MuiOutlinedInput-root': {
        borderRadius: '8px'
      }
}

export const ExperienceModal = ({ open, setModalOpen, title }) => {
    const [selectedStartDate, setSelectedStartDate] = useState(dayjs());
    const [selectedEndDate, setSelectedEndDate] = useState(dayjs());
    const [selectedInstitution, setSelectedInstitution] = useState(null);
    const [description, setDescription] = useState('');

    const handleInstitutionChange = (event, value) => {
        setSelectedInstitution(value);
    };

    const handleStartDateChange = date => {
        setSelectedStartDate(date);
    };

    const handleEndDateChange = date => {
        setSelectedEndDate(date);
    };

    const handleDescriptionChange = event => {
        setDescription(event.target.value);
    };

    const handleKeyDown = event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.target.value += '\n';
        }
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (!selectedInstitution) {
            alert('Institution is not selected!');
            return;
        }

        const data = {
            Institution: selectedInstitution.name,
            Description: description,
            StartDate: selectedStartDate.format('DD.MM.YYYY'),
            EndDate: selectedEndDate.format('DD.MM.YYYY'),
        };
        console.log(data);

        setSelectedStartDate(dayjs());
        setSelectedEndDate(dayjs());
        setSelectedInstitution(null);
        setDescription('');
        setModalOpen(!open);
    };

    return (
        <Modal open={open} onClose={() => setModalOpen()}>
            <Box sx={modalProperty}>
                <div className={css.titleWrapp}>
                    <p className={css.title}>{title}</p>
                    <IconButton
                        aria-label="close modal"
                        onClick={() => setModalOpen()}
                        sx={{ '&:hover, &:focus': { background: '#EDF5F5' } }}
                    >
                        <CloseIcon
                            sx={{
                                fill: 'black',
                                width: '24px',
                                height: '24px',
                            }}
                        />
                    </IconButton>
                </div>
                <form>
                    <ul className={css.formWrapp}>
                        <li className={css.inputWrapp}>
                            <p htmlFor="combo-box-demo" className={css.label}>Institution</p>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={institutionData}
                                value={selectedInstitution}
                                onChange={handleInstitutionChange}
                                sx={{ width: '100%' }}
                                getOptionLabel={option => option.name}
                                renderInput={params => (
                                    <TextField {...params} sx={inputStyles} placeholder="Enter your text" />
                                )}
                            />
                        </li>
                        <li className={css.inputWrapp}>
                            <p className={css.label}>Description</p>
                            <Input
                                variant="primary"
                                color="primary"
                                type="text"
                                value={description}
                                onChange={handleDescriptionChange}
                                onKeyDown={handleKeyDown}
                                multiline
                                disableUnderline
                            />
                        </li>
                        <li className={css.inputWrapp}>
                            <p className={css.label}>Start date</p>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoItem components={['DatePicker']} >
                                    <DatePicker
                                        sx={{ width: '100%', ...datePickerStyles}}
                                        value={selectedStartDate}
                                        onChange={handleStartDateChange}
                                    />
                                </DemoItem>
                            </LocalizationProvider>
                        </li>
                        <li>
                        <p className={css.label}>End date</p>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DemoItem components={['DatePicker']}>
                                    <DatePicker
                                        sx={{ width: '100%', ...datePickerStyles}}
                                        value={selectedEndDate}
                                        onChange={handleEndDateChange}
                              
                                    />
                                </DemoItem>
                            </LocalizationProvider>
                        </li>
                    </ul>

                    <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        onClick={handleSubmit}
                        sx={buttonStyle}
                        disableElevation
                    >
                        save
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};
