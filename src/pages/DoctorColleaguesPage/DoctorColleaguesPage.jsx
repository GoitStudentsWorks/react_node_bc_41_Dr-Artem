import { UilSearch } from '@iconscout/react-unicons';
import { IconButton, Input } from '@mui/material';
import { ProfileBlockDoctore } from 'components/ProfileBlockDoctore/ProfileBlockDoctore';
import BasicSelect from 'components/element/Select';
// import { useEffect, useRef } from 'react';
import css from './DoctorColleaguesPage.module.css';

const DoctorColleaguesPage = () => {
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
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    cards.sort((a, b) => b - a);
    // cards.sort((a, b) => b.rating - a.rating);

    // const specializationRef = useRef(null);
    // const categoryRef = useRef(null);

    // useEffect(() => {
    //     const handleClick = event => {
    //         const specialization = document.querySelector('#filterSpecialization');
    //         const specializationArrow = document.querySelector('#specializationArrow');
    //         const category = document.querySelector('#filterCategory');
    //         const categoryArrow = document.querySelector('#categoryArrow');
    //         if (!specializationRef.current.contains(event.target)) {
    //             specialization.style.opacity = 0;
    //             specializationArrow.style.transform = 'rotate(180deg)';
    //         }
    //         if (!categoryRef.current.contains(event.target)) {
    //             category.style.opacity = 0;
    //             categoryArrow.style.transform = 'rotate(180deg)';
    //         }
    //     };

    //     window.addEventListener('click', handleClick);

    //     return () => {
    //         window.removeEventListener('click', handleClick);
    //     };
    // }, []);

    return (
        <>
            <div className={css.filter}>
                <div>
                    <Input
                        sx={{ minWidth: '270px' }}
                        variant="filter"
                        color="primary"
                        disableUnderline={true}
                        type="text"
                        placeholder="Search"
                        endAdornment={
                            <IconButton disableRipple={true} sx={{ padding: '0px' }}>
                                <UilSearch />
                            </IconButton>
                        }
                    />
                </div>
                <div className={css.filterSelect}>
                    <BasicSelect
                        styles={{ minWidth: '180px' }}
                        title={'Specialization'}
                        specializations={specializations}
                    />
                    <BasicSelect styles={{ minWidth: '150px' }} title={'Category'} categories={categories} />
                </div>
            </div>
            <ul className={css.patientList}>
                {cards.map(card => (
                    <li className={css.patientItem}>
                        <ProfileBlockDoctore />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default DoctorColleaguesPage;
