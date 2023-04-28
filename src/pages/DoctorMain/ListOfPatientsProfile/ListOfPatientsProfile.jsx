import { UilFileAlt } from '@iconscout/react-unicons';
import { Icon, IconButton } from '@mui/material';
import { PatientMedcart } from 'components/PatientMedcart/PatientMedcart';
import { PatientMedcartEdit } from 'components/PatientMedcartEdit/PatientMedcartEdit';
import { ProfileBlockPatient } from 'components/ProfileBlockPatient/ProfileBlockPatient';
import { ResultsEditModal } from 'components/ResultsEditModal/ResultsEditModal';
import { useState } from 'react';
import { RxPencil1 } from 'react-icons/rx';
import style from './ListOfPatientsProfile.module.css';

const ListOfPatientsProfile = () => {
    const [editMedcart, setEditMedcart] = useState(true);
    const [open, setOpen] = useState(false);

    const analysis = [
        {
            name: 'Urine analysis is general',
        },
        {
            name: 'Clinical blood analysis',
        },
        {
            name: 'Biochemical research',
        },
        {
            name: 'Hematological studies',
        },
    ];

    const currentMedcart = editMedcart ? (
        <PatientMedcart setEditMedcart={setEditMedcart} />
    ) : (
        <PatientMedcartEdit setEditMedcart={setEditMedcart} />
    );
    // const modal = editAnalysis && <ResultsEditModal setEditAnalysis={setEditAnalysis} />;

    return (
        <>
            <ProfileBlockPatient />
            <div className={style.PatientResults}>
                <ul className={style.PatientResults_VisitRecord}>
                    <li>
                        Doctor:<span>Shumeiko Timur</span>
                    </li>
                    <li>
                        Date:<span>16/12/2021</span>
                    </li>
                </ul>
                <ul className={style.PatientResults_Details}>
                    {analysis.map(({ name }) => {
                        return (
                            <li>
                                <Icon color="primary">
                                    <UilFileAlt style={{ width: '20px', height: '20px' }} />
                                </Icon>
                                {name}
                            </li>
                        );
                    })}
                </ul>
                <IconButton
                    color="primary"
                    sx={{ position: 'absolute', top: '16px', right: '16px' }}
                    onClick={() => setOpen(true)}
                >
                    <RxPencil1 style={{ width: '20px', height: '20px' }} />
                </IconButton>
            </div>
            {currentMedcart}
            <ResultsEditModal open={open} setOpen={setOpen} />
        </>
    );
};

export default ListOfPatientsProfile;
