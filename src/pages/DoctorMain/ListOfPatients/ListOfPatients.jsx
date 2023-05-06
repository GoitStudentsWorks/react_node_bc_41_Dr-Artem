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
    const [allVisits, setAllVisits] = useState(null);

    const dispatch = useDispatch();

    const frequency = ['All', 'New', 'Permanent'];

    useEffect(() => {
        async function fetchVisits() {
            const { data } = await axios.get(`/visits`);
            setAllVisits(data);
        }
        fetchVisits();
    }, []);

    useEffect(() => {
        dispatch(getAllUsersForRole('Patient')).then(({ payload }) => {
            setAllPatients(payload);
            setFiltered(payload);
        });
        // eslint-disable-next-line
    }, [dispatch]);

    useEffect(() => {
        dispatch(getAllVisits({ page, limit: 9 }));
    }, [dispatch, page]);

    const handlePageOnVisits = data => {
        setPage(data);
    };

    let numberOfPaginationButton = 8;
    if (allVisits) {
        numberOfPaginationButton = Math.round(allVisits.length / 7);
    }

    return (
        <>
            <div className={css.filter}>
                <BasicSelect title={'Patients'} filter={frequency} />
            </div>
            <UsersList listOfUsers={filtered || allPatients}>
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
