import BasicSelect from 'components/BasicSelect/BasicSelect';
import LinkViewProfile from 'components/LinkViewProfile/LinkViewProfile';
import { PagePagination, paginationUsers, windowSizePagination } from 'components/PagePagination/PagePagination';
import { ProfileBlockPatient } from 'components/ProfileBlockPatient/ProfileBlockPatient';
import UsersList from 'components/UsersList/UsersList';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllUsersForRole } from 'redux/info/operation';
import css from './ListOfPatients.module.css';

const ListOfPatients = () => {
    const [allPatients, setAllPatients] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [pagination, setPagination] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const dispatch = useDispatch();

    const frequency = ['All', 'New', 'Permanent'];

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        windowSizePagination(window.innerWidth, setLimit);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let limit = null;
        let limitResult = windowSizePagination(windowWidth, setLimit, limit, 'yes');
        dispatch(getAllUsersForRole('Patient')).then(({ payload }) => {
            const result = paginationUsers(payload, limitResult);
            setAllPatients(payload);
            setPagination(result);
        });
        console.log(limit);
    }, [dispatch]);

    useEffect(() => {
        windowSizePagination(windowWidth, setLimit);

        const result = paginationUsers(filtered.length > 0 ? filtered : allPatients, limit);
        setPagination(result);
    }, [windowWidth]);

    const handlePageOnVisits = data => {
        setPage(data);
    };

    let numberOfPaginationButton = 0;
    if (filtered || pagination) {
        numberOfPaginationButton = filtered.length || pagination.length;
    }

    const sortDoctors = status => {
        console.log(status);
        const filterDoctor = allPatients.filter(el => el.patientStatus === status);
        const result = paginationUsers(filterDoctor, limit);

        setFiltered(result);
        console.log(result[page - 1]);
    };

    return (
        <>
            <div className={css.filter}>
                <BasicSelect title={'Patients'} filter={frequency} sortDoctors={sortDoctors} />
            </div>
            {limit && (
                <UsersList listOfUsers={filtered[page - 1] || pagination[page - 1] || allPatients}>
                    <ProfileBlockPatient>
                        <LinkViewProfile>view profile</LinkViewProfile>
                    </ProfileBlockPatient>
                </UsersList>
            )}
            {limit && (
                <PagePagination
                    numberOfBtnsOnVisitsHistory={numberOfPaginationButton}
                    handlePageOnVisits={handlePageOnVisits}
                />
            )}
        </>
    );
};

export default ListOfPatients;
