import { AboutBlock } from 'components/AboutBlock/AboutBlock';
import { ProfileBlockDoctore } from 'components/ProfileBlockDoctore/ProfileBlockDoctore';
import { SpecializationBlock } from 'components/SpecializationBlock/SpecializationBlock';
import { WeekVisitsBlock } from 'components/WeekVisitsBlock/WeekVisitsBlock';
import css from './Personal.module.css';

const Personal = () => {
    return (
        <>
            <div className={css.DoctorInformation}>
                <ProfileBlockDoctore />
                <SpecializationBlock />
            </div>
            <div className={css.pageAboutBlock}>
                <AboutBlock />
                <WeekVisitsBlock />
            </div>
        </>
    );
};

export default Personal;
