import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const DoctorMainPage = () => {
    return (
        <>
            <Navigation />
            <Outlet />
            {/* <Pagination/> */}
        </>
    );
};

export default DoctorMainPage;
