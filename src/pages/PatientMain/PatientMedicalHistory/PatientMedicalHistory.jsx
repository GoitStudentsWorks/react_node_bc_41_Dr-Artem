import AnalysisBlock from 'components/AnalysisBlock/AnalysisBlock';
import { ProfileBlockPatient } from 'components/ProfileBlockPatient/ProfileBlockPatient';

const PatientMedicalHistory = () => {
    return (
        <>
            <ProfileBlockPatient />
            <div>
                <AnalysisBlock />
            </div>
        </>
    );
};
export default PatientMedicalHistory;
