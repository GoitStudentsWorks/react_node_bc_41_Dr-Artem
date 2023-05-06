/* eslint-disable react-hooks/exhaustive-deps */
import { ExperienceBlock } from 'components/ExperienceBlock/ExperienceBlock';
import { useSelector } from 'react-redux';
import { selectUserInfo } from 'redux/info/selectors';

import { AboutBlock } from 'components/AboutBlock/AboutBlock';
import { ProfileBlockDoctore } from 'components/ProfileBlockDoctore/ProfileBlockDoctore';
import { SpecializationBlock } from 'components/SpecializationBlock/SpecializationBlock';
import { WeekVisitsBlock } from 'components/WeekVisitsBlock/WeekVisitsBlock';
import css from './Personal.module.css';

const Personal = () => {
    const doctorInfo = useSelector(selectUserInfo);

    return (
        <>
            {doctorInfo && (
                <>
                    <div className={css.DoctorInformation}>
                        <ProfileBlockDoctore userInfo={doctorInfo} />
                        <SpecializationBlock
                            specialization={doctorInfo.specialization}
                            category={doctorInfo.category}
                        />
                    </div>
                    <div className={css.pageAboutBlock}>
                        <AboutBlock about={doctorInfo.about} />
                        <ExperienceBlock doctorInfo={doctorInfo} />
                        <WeekVisitsBlock />
                    </div>
                </>
            )}
        </>
    );
};

export default Personal;
