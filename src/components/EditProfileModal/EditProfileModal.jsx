import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import css from './EditProfileModal.module.css';

const specializations = [
    'Cardiologist',
    'Dermatologist',
    'Endocrinologist',
    'Gastroenterologist',
    'Hematologist',
    'Neurologist',
    'Obstetrician',
    'Oncologist',
    'Ophthalmologist',
    'Orthopedist',
    'Otolaryngologist',
    'Pediatrician',
    'Psychiatrist',
    'Radiologist',
    'Urologist',
];

const categories = ['The First', 'The Second', 'Higher'];
export const EditProfileModal = () => {
    const [specialization, setSpecialization] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = evt => {
        evt.preventDefault();
        const data = {
            specialization,
            category,
        };
        setCategory('');
        setSpecialization('');
    };

    return (
        <form className={css.formWrapper} onSubmit={handleSubmit}>
            <div className={css.contentWrapper}>
                <div className={css.titleWrapper}>
                    <h2 className={css.title}>Edit Profile</h2>
                    <IconButton size="small">
                        <CloseIcon sx={{ width: '12px', height: '12px', color: 'text.black' }} />
                    </IconButton>
                </div>
                <p className={css.label}>Specialization</p>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={specializations}
                    sx={{
                        '& .MuiOutlinedInput-root .MuiAutocomplete-input': { padding: '0', height: '28px' },
                        maxWidth: { sm: '295px', md: '436px' },
                        marginBottom: { sm: '14px', md: '16px' },
                    }}
                    value={specialization}
                    onChange={(evt, value) => setSpecialization(value)}
                    renderInput={params => <TextField {...params} />}
                />
                <p className={css.label}>Category</p>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={categories}
                    sx={{
                        maxWidth: {
                            '& .MuiOutlinedInput-root .MuiAutocomplete-input': { padding: '0', height: '28px' },
                            sm: '295px',
                            md: '436px',
                        },
                        marginBottom: { sm: '20px', md: '32px' },
                    }}
                    value={category}
                    onChange={(evt, value) => setCategory(value)}
                    renderInput={params => <TextField {...params} />}
                />
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
    );
};
