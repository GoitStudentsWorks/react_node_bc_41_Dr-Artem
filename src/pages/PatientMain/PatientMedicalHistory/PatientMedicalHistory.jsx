import AnalysisBlock from 'components/AnalysisBlock/AnalysisBlock';
import ModalEditPatientProfile from 'components/ModalEditPatientProfile/ModalEditPatientProfile';
import { ProfileBlockPatient } from 'components/ProfileBlockPatient/ProfileBlockPatient';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from 'redux/info/operation';
import { selectUserInfo } from 'redux/info/selectors';

import { ModalMakeAppointment } from 'components/ModalMakeAppointment/ModalMakeAppointment';

export const PatientMedicalHistory = () => {
    const [modalAppointment, setModalAppointment] = useState(false);
    const [mmodalProfile, setMmodalProfile] = useState(false);
    const dispatch = useDispatch();
    const patientInfo = useSelector(selectUserInfo);

    useEffect(() => {
        dispatch(getUserInfo());
    }, [dispatch]);
    return (
        <>
            {patientInfo && (
                <>
                    <ProfileBlockPatient
                        userInfo={patientInfo}
                        modalAppointment={modalAppointment}
                        setModalAppointment={setModalAppointment}
                        mmodalProfile={mmodalProfile}
                        setMmodalProfile={setMmodalProfile}
                    />
                    <div>
                        <AnalysisBlock />
                    </div>
                    <ModalEditPatientProfile open={mmodalProfile} setApp={setMmodalProfile} />
                    {modalAppointment && <ModalMakeAppointment open={modalAppointment} setApp={setModalAppointment} />}
                </>
            )}
        </>
    );
};
