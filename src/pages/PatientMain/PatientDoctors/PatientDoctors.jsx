import { UilSearch } from '@iconscout/react-unicons';
import { Button, IconButton, Input } from '@mui/material';
import BasicSelect from 'components/BasicSelect/BasicSelect';
import { PagePagination } from 'components/PagePagination/PagePagination';
import { ProfileBlockDoctore } from 'components/ProfileBlockDoctore/ProfileBlockDoctore';
import UsersList from 'components/UsersList/UsersList';
import style from './PatientDoctors.module.css';

const PatientDoctors = () => {
    const sorting = ['By default', 'Rating', 'Price'];
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    cards.sort((a, b) => b - a);

    return (
        <>
            <div className={style.filter}>
                <div className={style.filterSelect}>
                    <BasicSelect styles={{ minWidth: '180px' }} title={'Sorting'} filter={sorting} />
                </div>
            </div>
            <UsersList listOfUsers={cards}>
                <ProfileBlockDoctore>
                    <Button variant="outlined" color="primary">
                        make an appointment
                    </Button>
                </ProfileBlockDoctore>
            </UsersList>
            <PagePagination />
        </>
    );
};

export default PatientDoctors;
