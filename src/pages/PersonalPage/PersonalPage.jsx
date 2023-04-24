import { SpecializationBlock } from 'components/SpecializationBlock/SpecializationBlock';
import { AboutBlock } from 'components/AboutBlock/AboutBlock';
import { WeekVisitsBlock } from 'components/WeekVisitsBlock/WeekVisitsBlock';
import { ProfileBlockDoctore } from 'components/ProfileBlockDoctore/ProfileBlockDoctore';

export const PersonalPage = () => {
    return (
        <div
            style={{
                padding: 20,
            }}
        >
            <ProfileBlockDoctore />
            <SpecializationBlock />
            <AboutBlock />
            <WeekVisitsBlock />
        </div>
    );
};
