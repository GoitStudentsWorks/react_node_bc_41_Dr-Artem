import { UilFileAlt } from '@iconscout/react-unicons';
import { Icon, IconButton, Link } from '@mui/material';
import { ModalEditPatientResult } from 'components/ModalEditPatientResult/ModalEditPatientResult';
import { PatientMedcart } from 'components/PatientMedcart/PatientMedcart';
import { PatientMedcartEdit } from 'components/PatientMedcartEdit/PatientMedcartEdit';
import { ProfileBlockPatient } from 'components/ProfileBlockPatient/ProfileBlockPatient';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { RxPencil1 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserInfoById } from 'redux/info/operation';
import { selectUserInfoById } from 'redux/info/selectors';
import { selectAllVisits } from 'redux/visits/selectors';
import style from './ListOfPatientsProfile.module.css';

export const ListOfPatientsProfile = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const [editMedcart, setEditMedcart] = useState(true);
    const [medcart, setMedcart] = useState(null);
    const [open, setOpen] = useState(false);
    const userInfo = useSelector(selectUserInfoById);
    const allVisits = useSelector(selectAllVisits);

    const clickedVisit = JSON.parse(localStorage.getItem('clickedVisit'));

    useEffect(() => {
        dispatch(getUserInfoById(id));
        if (allVisits) {
            const currentVisit = allVisits.filter(el => el._id === clickedVisit._id);
            setMedcart([
                {
                    title: 'Complaints at the time of inspection:',
                    textList: [currentVisit[0]?.complaints || ''],
                },
                {
                    title: 'Medical history:',
                    textList: [currentVisit[0]?.medicalHistory || ''],
                },
                {
                    title: 'Objective condition at the time of inspection:',
                    textList: [currentVisit[0]?.objectiveCondition || ''],
                },
                {
                    title: 'Associated diseases:',
                    textList: [currentVisit[0]?.associatedDiseases || ''],
                },
                {
                    title: 'Assessment of body condition:',
                    textList: [currentVisit[0]?.bodyCondition || ''],
                },
                {
                    title: 'Clinical diagnosis:',
                    textList: [currentVisit[0]?.clinicalDiagnosis || ''],
                },
                {
                    title: 'Treatment recommendations:',
                    textList: [currentVisit[0]?.recomendation || ''],
                },
            ]);
        }
        // eslint-disable-next-line
    }, [allVisits]);

    const currentMedcart = editMedcart ? (
        <PatientMedcart medcart={medcart} setEditMedcart={setEditMedcart} />
    ) : (
        <PatientMedcartEdit id={clickedVisit._id} medcart={medcart} setEditMedcart={setEditMedcart} />
    );

    return (
        <>
            <div className={style.PatientInformation}>
                {userInfo && <ProfileBlockPatient userInfo={userInfo} />}
                <div className={style.PatientResults}>
                    <ul className={style.PatientResults_VisitRecord}>
                        {/* <li key={clickedVisit.doctor.name}>
                            Doctor:<span>{clickedVisit.doctor.name}</span>
                        </li> */}
                        <li key={clickedVisit.updatedAt}>
                            Date:<span>{moment(clickedVisit.updatedAt).format('MM/DD/YYYY')}</span>
                        </li>
                    </ul>
                    {clickedVisit.files && (
                        <ul className={style.PatientResults_Details}>
                            {clickedVisit.files.map(({ fileName, fileURL }, index) => {
                                return (
                                    <li key={index}>
                                        <Icon color="primary">
                                            <UilFileAlt style={{ width: '20px', height: '20px' }} />
                                        </Icon>
                                        <Link href={fileURL}>{fileName}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    )}

                    <IconButton
                        color="primary"
                        sx={{ position: 'absolute', top: '16px', right: '16px' }}
                        onClick={() => setOpen(true)}
                    >
                        <RxPencil1 style={{ width: '20px', height: '20px' }} />
                    </IconButton>
                </div>
            </div>

            {currentMedcart}
            <ModalEditPatientResult
                data={clickedVisit}
                // id={clickedVisit._id}
                // updatedAt={clickedVisit.updatedAt}
                // doctor={clickedVisit.doctor}
                // files={clickedVisit.files}
                open={open}
                setOpen={setOpen}
            />
        </>
    );
};
