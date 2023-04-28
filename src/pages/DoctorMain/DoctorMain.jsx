import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const DoctorMain = () => {
    return (
        <>
            <Navigation />
            <Outlet />
            {/* <Pagination/> */}
        </>
    );
};

export default DoctorMain;
