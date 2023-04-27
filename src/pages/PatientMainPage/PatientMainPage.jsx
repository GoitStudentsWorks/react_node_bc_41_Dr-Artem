import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export const PatientMainPage = () => {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    );
};
