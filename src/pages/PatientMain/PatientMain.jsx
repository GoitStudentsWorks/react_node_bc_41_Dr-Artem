import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const PatientMain = () => {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    );
};
export default PatientMain;
