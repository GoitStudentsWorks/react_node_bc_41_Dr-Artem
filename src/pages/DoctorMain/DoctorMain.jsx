import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export const DoctorMain = () => {
    return (
        <>
            <Navigation />
            <Outlet />
            {/* <Pagination/> */}
        </>
    );
};
