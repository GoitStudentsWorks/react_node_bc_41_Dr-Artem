import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export const PatientMain = () => {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    );
};
