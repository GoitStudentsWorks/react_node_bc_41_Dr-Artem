import { UilBrightnessPlus, UilPen } from '@iconscout/react-unicons';
import { Button, IconButton } from '@mui/material';
import { Badge } from 'components/Badge/Badge';
import Card from 'components/Card/Card';
import MedicalHistoryModalPencil from 'components/MedicalHistoryModalPencil/MedicalHistoryModalPencil';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import { useState } from 'react';
import { useLocation } from 'react-router';
import { AppointmentModal } from '../AppointmentModal/AppointmentModal';
import css from './ProfileBlockPatient.module.css';

export const ProfileBlockPatient = ({ children }) => {
    const [appModal, setAppModal] = useState(false);

    const personalLoc = useLocation().pathname.startsWith('/patient/');
    return (
        <>
            <Card>
                <Badge>Patient</Badge>
                <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <ProfileImage personalLoc={personalLoc} />
                    <div>
                        <ul className={css.list}>
                            <li className={css.item}>
                                Name:<p className={css.data}>Melnyk Victoria Petrivna</p>
                            </li>
                            <li className={css.item}>
                                Gender:<p className={css.data}>Female</p>
                            </li>
                            <li className={css.item}>
                                Date of birth:<p className={css.data}>02/03/1995</p>
                            </li>
                            <li className={css.item}>
                                Phone number:<p className={css.data}>+380 (97) 77 77 7 77</p>
                            </li>
                        </ul>
                        {personalLoc && (
                            <Button
                                variant="outlined"
                                color="primary"
                                type="submit"
                                onClick={() => setAppModal(!appModal)}
                            >
                                make an appointment
                            </Button>
                        )}
                        {children}
                    </div>
                </div>

                {personalLoc && (
                    <MedicalHistoryModalPencil />
                    // <IconButton color="primary" sx={{ position: 'absolute', top: '16px', right: '16px' }}>
                    //     <UilPen style={{ width: '20px', height: '20px' }} />
                    // </IconButton>
                )}
                <AppointmentModal open={appModal} setApp={setAppModal} />
            </Card>
        </>
    );
};
