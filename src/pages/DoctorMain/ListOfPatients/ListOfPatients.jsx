import BasicSelect from 'components/BasicSelect/BasicSelect';
import { ProfileBlockPatient } from 'components/ProfileBlockPatient/ProfileBlockPatient';
import UsersList from 'components/UsersList/UsersList';
// import { useEffect, useRef } from 'react';
import LinkViewProfile from 'components/LinkViewProfile/LinkViewProfile';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllUsersForRole } from 'redux/info/operation';
import css from './ListOfPatients.module.css';
import { PagePagination } from 'components/PagePagination/PagePagination';
import { getAllVisits } from 'redux/visits/operation';
import axios from 'axios';

const ListOfPatients = () => {
    const [allPatients, setAllPatients] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    const frequency = ['All', 'New', 'Permanent'];

    useEffect(() => {
        dispatch(getAllUsersForRole('Patient')).then(({ payload }) => {
            const result = payload.map((el, i) => (i % 9 === 0 ? payload.slice(i, i + 9) : null)).filter(el => el);
            setAllPatients(payload);
            setFiltered(result);
        });
    }, [dispatch]);

    const handlePageOnVisits = data => {
        setPage(data);
    };

    let numberOfPaginationButton = 0;
    if (filtered) {
        numberOfPaginationButton = filtered.length;
    }

    return (
        <>
            <div className={css.filter}>
                <BasicSelect title={'Patients'} filter={frequency} />
            </div>
            <UsersList listOfUsers={filtered[page - 1] || allPatients}>
                <ProfileBlockPatient>
                    <LinkViewProfile>view profile</LinkViewProfile>
                </ProfileBlockPatient>
            </UsersList>
            <PagePagination
                numberOfBtnsOnVisitsHistory={numberOfPaginationButton}
                handlePageOnVisits={handlePageOnVisits}
            />
        </>
    );
};

export default ListOfPatients;
