import { SpecializationBlock } from 'components/SpecializationBlock/SpecializationBlock';
import { AboutBlock } from 'components/AboutBlock/AboutBlock';
import { WeekVisitsBlock } from 'components/WeekVisitsBlock/WeekVisitsBlock';

export const PersonalPage = () => {
    return (
        <div
            style={{
                padding: 20,
            }}
        >
            <SpecializationBlock />
            <AboutBlock />
            <WeekVisitsBlock />
        </div>
    );
};
