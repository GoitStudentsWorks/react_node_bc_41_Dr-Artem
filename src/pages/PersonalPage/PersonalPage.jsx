import { SpecializationBlock } from 'components/SpecializationBlock/SpecializationBlock';
import { AboutBlock } from 'components/AboutBlock/AboutBlock';
import { WeekVisitsBlock } from 'components/WeekVisitsBlock/WeekVisitsBlock';
import { ProfileBlockDoctore } from 'components/ProfileBlockDoctore/ProfileBlockDoctore';
import css from 'pages/PersonalPage/PersonalPage.module.css';

export const PersonalPage = () => {
    return (
        <div className={css.pageContainer}>
            <div className={css.pageProfileBlock}>
                <ProfileBlockDoctore />
                <SpecializationBlock />
            </div>
            <div className={css.pageAboutBlock}>
                <AboutBlock />
                <WeekVisitsBlock />
            </div>
        </div>
    );
};
