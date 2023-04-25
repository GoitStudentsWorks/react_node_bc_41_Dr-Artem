import ChosenBlock from 'components/ChosenBlock/ChosenBlock';
import DoctorAppointment from 'components/DoctorAppointment/DoctorAppointment';
import { FAQ } from 'components/FAQ/FAQ';
import Rewiews from 'components/Rewiews/Rewiews';
import { Navigation } from '../../components/Navigation/Navigation';
function MainPage() {
    return (
        <>
        <Navigation/>
            <ChosenBlock />
            <DoctorAppointment />
            <Rewiews />
            <FAQ />
        </>
    );
}

export default MainPage;
