/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from 'redux/info/operation';
import { selectUserInfo } from 'redux/info/selectors';

import { AboutBlock } from 'components/AboutBlock/AboutBlock';
import { ProfileBlockDoctore } from 'components/ProfileBlockDoctore/ProfileBlockDoctore';
import { SpecializationBlock } from 'components/SpecializationBlock/SpecializationBlock';
import { WeekVisitsBlock } from 'components/WeekVisitsBlock/WeekVisitsBlock';
import css from './Personal.module.css';

export const Personal = () => {
    const dispatch = useDispatch();
    const doctorInfo = useSelector(selectUserInfo);

    useEffect(() => {
        dispatch(getUserInfo());
    }, []);
    return (
        <>
            {doctorInfo && (
                <>
                    <div className={css.DoctorInformation}>
                        <ProfileBlockDoctore doctorInfo={doctorInfo} />
                        <SpecializationBlock doctorInfo={doctorInfo} />
                    </div>
                    <div className={css.pageAboutBlock}>
                        <AboutBlock doctorInfo={doctorInfo} />
                        <WeekVisitsBlock />
                    </div>
                </>
            )}
        </>
    );
};
