import { UilSearch } from '@iconscout/react-unicons';
import { Button, IconButton, Input } from '@mui/material';
import BasicSelect from 'components/BasicSelect/BasicSelect';
// import { useEffect, useRef } from 'react';
import UsersList from 'components/UsersList/UsersList';
import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllUsersForRole } from 'redux/info/operation';
import css from './Colleagues.module.css';

const DEBOUNCE_DELAY = 300;
export const Colleagues = () => {
    const specializations = [
        'Show all',
        'Ophthalmologist',
        'Surgeon',
        'Therapist',
        'Neurologist',
        'Gynecologist',
        'Endocrinologist',
        'Psychiatrist',
        'Psychotherapist',
        'Otolaryngologist',
    ];
    const categories = ['Show all', 'The first', 'The second', 'Higher'];
    const [allDoctors, setAllDoctors] = useState([]);
    const [filteredByName, setFilteredByName] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsersForRole('Doctor')).then(({ payload }) => {
            setAllDoctors(payload);
            setFilteredByName(payload);
        });
        // eslint-disable-next-line
    }, []);

    const handleFilterName = e => {
        const inputValue = e.target.value.trim();
        const filtered = allDoctors.filter(doctor => doctor.name.startsWith(inputValue));
        setFilteredByName(filtered);
    };

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
                    <BasicSelect styles={{ minWidth: '180px' }} title={'Specialization'} filter={specializations} />
                    <BasicSelect styles={{ minWidth: '150px' }} title={'Category'} filter={categories} />
                </div>
            </div>
            <UsersList listOfUsers={filteredByName}>
                <Button variant="outlined" color="primary">
                    view profile
                </Button>
            </UsersList>
        </>
    );
};
