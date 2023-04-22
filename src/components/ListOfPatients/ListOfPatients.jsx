import { Outlet } from 'react-router-dom';
import Profile from './Profile/Profile';
import Patients from './Patients/Patients';
import Colleagues from 'components/Colleagues/Colleagues';
import css from './ListOfPatients.module.css';

const ListOfPatients = () => {
    return (
        <div className={css.patient}>
            <Patients />
            <Outlet />
        </div>
    );
};

export default ListOfPatients;
