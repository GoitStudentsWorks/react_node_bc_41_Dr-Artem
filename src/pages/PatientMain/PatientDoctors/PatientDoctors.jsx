import { Button } from '@mui/material';
import BasicSelect from 'components/BasicSelect/BasicSelect';
import { PagePagination } from 'components/PagePagination/PagePagination';
import UsersList from 'components/UsersList/UsersList';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAppointmentById, getCurrentUserAppointments, setAppointment } from 'redux/appointment/operation';
import { getAllUsersForRole } from 'redux/info/operation';
import style from './PatientDoctors.module.css';

export const PatientDoctors = () => {
    const sorting = ['Name', 'Rating', 'Price'];
    const [allDoctors, setAllDoctors] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsersForRole('Doctor')).then(({ payload }) => {
            setAllDoctors(payload);
        });
        // eslint-disable-next-line
    }, []);

    const sortDoctors = selectedValue => {
        switch (selectedValue) {
            case 'Name': {
                const filtered = allDoctors.slice().sort((a, b) => {
                    const nameA = a.name.toUpperCase();
                    const nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
                setAllDoctors(filtered);
                break;
            }
            case 'Rating': {
                const filtered = allDoctors.slice().sort((a, b) => b.rating - a.rating);
                setAllDoctors(filtered);
                break;
            }
            case 'Price': {
                const filtered = allDoctors.slice().sort((a, b) => b.price - a.price);
                setAllDoctors(filtered);
                break;
            }
            default:
                console.log('');
        }
    };

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
                    <BasicSelect
                        styles={{ minWidth: '180px' }}
                        title={'Sorting'}
                        filter={sorting}
                        sortDoctors={sortDoctors}
                        allDoctors={allDoctors}
                        setAllDoctors={setAllDoctors}
                    />
                </div>
            </div>
            <UsersList listOfUsers={allDoctors}>
                <Button variant="outlined" color="primary" onClick={handleClick}>
                    make an appointment
                </Button>
            </UsersList>
            <PagePagination />
        </>
    );
};
