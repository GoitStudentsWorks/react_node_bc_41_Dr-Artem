/* eslint-disable react-hooks/exhaustive-deps */
import { UilSearch } from '@iconscout/react-unicons';
import { Autocomplete, IconButton, Input, TextField } from '@mui/material';
import LinkViewProfile from 'components/LinkViewProfile/LinkViewProfile';
import { ProfileBlockDoctore } from 'components/ProfileBlockDoctore/ProfileBlockDoctore';
import UsersList from 'components/UsersList/UsersList';
import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersForRole } from 'redux/info/operation';
import { selectAllDoctors } from 'redux/info/selectors';
import css from './Colleagues.module.css';

const specializations = [
    'Show All',
    'Ophthalmologist',
    'Surgeon',
    'Therapist',
    'Neurologist',
    'Gynecologist',
    'Endocrinologist',
    'Psychiatrist',
    'Psychotherapist',
    'Otolaryngologist',
    'Oncologist',
];
const categories = ['Show All', 'The First', 'The Second', 'Higher'];
const DEBOUNCE_DELAY = 300;

const Colleagues = () => {
    const [allDoctors, setAllDoctors] = useState([]);
    const [filteredByName, setFilteredByName] = useState([]);
    const [specialization, setSpecialization] = useState('Show All');
    const [category, setCategory] = useState('Show All');
    const dispatch = useDispatch();
    const doctors = useSelector(selectAllDoctors);

    useEffect(() => {
        dispatch(getAllUsersForRole('Doctor'));
    }, []);

    const handleFilterName = e => {
        const inputValue = e.target.value.trim();
        const filtered = allDoctors.filter(doctor => doctor.name.toLowerCase().startsWith(inputValue.toLowerCase()));
        setFilteredByName(filtered);
    };

    const handleFilterSpecialization = (event, value) => {
        setSpecialization(value);
    };

    const handleFilterCategory = (event, value) => {
        setCategory(value);
    };

    useEffect(() => {
        let filtered = doctors;

        if (specialization && specialization !== 'Show All') {
            filtered = filtered.filter(doctor => doctor.specialization === specialization);
        }

        if (category && category !== 'Show All') {
            filtered = filtered.filter(doctor => doctor.category === category);
        }

        setAllDoctors(filtered);
        setFilteredByName(filtered);
    }, [doctors, specialization, category]);

    return (
        <>
            <div className={css.filter}>
                <div>
                    <Input
                        sx={{ minWidth: '270px' }}
                        variant="filter"
                        color="primary"
                        disableUnderline
                        type="text"
                        placeholder="Search"
                        onChange={debounce(handleFilterName, DEBOUNCE_DELAY)}
                        endAdornment={
                            <IconButton disableRipple sx={{ padding: '0px' }}>
                                <UilSearch />
                            </IconButton>
                        }
                    />
                </div>
                <div className={css.filterSelect}>
                    <ul style={{ display: 'flex' }}>
                        <li>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={specializations}
                                sx={{
                                    '& .MuiOutlinedInput-root .MuiAutocomplete-input': { padding: '0', height: '28px' },
                                    marginBottom: { sm: '14px', md: '16px' },
                                }}
                                value={specialization}
                                onChange={handleFilterSpecialization}
                                renderInput={params => <TextField {...params} />}
                            />
                        </li>
                        <li>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={categories}
                                sx={{
                                    '& .MuiOutlinedInput-root .MuiAutocomplete-input': {
                                        padding: '0',
                                        height: '28px',
                                    },
                                    marginBottom: { sm: '20px', md: '32px' },
                                }}
                                value={category}
                                onChange={handleFilterCategory}
                                renderInput={params => <TextField {...params} />}
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <UsersList listOfUsers={filteredByName ? filteredByName : doctors}>
                <ProfileBlockDoctore>
                    <LinkViewProfile>view profile</LinkViewProfile>
                </ProfileBlockDoctore>
            </UsersList>
        </>
    );
};

export default Colleagues;
