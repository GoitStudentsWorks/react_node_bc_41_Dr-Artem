import { UilSearch } from '@iconscout/react-unicons';
import { Button, IconButton, Input } from '@mui/material';
import BasicSelect from 'components/BasicSelect/BasicSelect';
import { PagePagination } from 'components/PagePagination/PagePagination';
import { ProfileBlockDoctore } from 'components/ProfileBlockDoctore/ProfileBlockDoctore';
import UsersList from 'components/UsersList/UsersList';
import style from './PatientDoctors.module.css';
import { useDispatch } from 'react-redux';
import { getCurrentUserAppointments, setAppointment, getAppointmentById } from 'redux/appointment/operation';

const PatientDoctors = () => {
    const dispatch = useDispatch();
    const sorting = ['By default', 'Rating', 'Price'];
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    cards.sort((a, b) => b - a);

    const handleClick = el => {
        console.log(el);
        // const qq = dispatch(
        //     setAppointment({
        //         specialization: 'hirirg',
        //         doctor: '64417972d4e00b5a6bb8389a',
        //         date: '345234123',
        //         time: '1234234234',
        //     })
        // );
        // qq.then(el => console.log(el));

        dispatch(getCurrentUserAppointments());

        // dispatch(getAppointmentById('64515633d28be343862f9973'));
    };

    return (
        <>
            <div className={style.filter}>
                <div className={style.filterSelect}>
                    <BasicSelect styles={{ minWidth: '180px' }} title={'Sorting'} filter={sorting} />
                </div>
            </div>
            <UsersList listOfUsers={cards}>
                <ProfileBlockDoctore>
                    <Button variant="outlined" onClick={handleClick} color="primary">
                        make an appointment
                    </Button>
                </ProfileBlockDoctore>
            </UsersList>
            <PagePagination />
        </>
    );
};

export default PatientDoctors;
