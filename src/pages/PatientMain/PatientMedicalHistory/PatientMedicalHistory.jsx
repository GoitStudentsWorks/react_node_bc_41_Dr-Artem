import AnalysisBlock from 'components/AnalysisBlock/AnalysisBlock';
import { ProfileBlockPatient } from 'components/ProfileBlockPatient/ProfileBlockPatient';

export const PatientMedicalHistory = () => {
    return (
        <>
            <ProfileBlockPatient />
            <div>
                <AnalysisBlock />
            </div>
        </>
    );
};
