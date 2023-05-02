import css from './MedicalHistoryPage.module.css';
import { ProfileBlockPatient } from 'components/ProfileBlockPatient/ProfileBlockPatient';
// import { ProfileBlockDoctore } from 'components/ProfileBlockDoctore/ProfileBlockDoctore'
import AnalysisBlock from 'components/AnalysisBlock/AnalysisBlock';

export const MedicalHistoryPage = () => {
    return (
        <section className={css.section}>
            <ProfileBlockPatient />
            <AnalysisBlock />
        </section>
    );
};
