import Colleagues from 'pages/DoctorColleaguesPage/DoctorColleaguesPage';
import { Outlet } from 'react-router-dom';
import css from './ListOfPatients.module.css';
import Patients from './Patients/Patients';
import Profile from './Profile/Profile';

const ListOfPatients = () => {
    return (
        <div className={css.patient}>
            <Colleagues />
            <Outlet />
        </div>
    );
};

export default ListOfPatients;
