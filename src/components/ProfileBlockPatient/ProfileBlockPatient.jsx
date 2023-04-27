import { UilBrightnessPlus, UilPen } from '@iconscout/react-unicons';
import { Button, IconButton } from '@mui/material';
import { Badge } from 'components/Badge/Badge';
import { useLocation } from 'react-router';
import check from '../../images/ProfileBlock/check.svg';
import plug from '../../images/ProfileBlock/plug.png';
import css from './ProfileBlockPatient.module.css';

export const ProfileBlockPatient = () => {
    const personalLoc = useLocation().pathname.startsWith('/patient/history/');
    return (
        <div className={css.wrapper}>
            <Badge>Patient</Badge>
            {personalLoc && (
                <IconButton color="primary">
                    <UilPen style={{ width: '20px', height: '20px' }} />
                </IconButton>
            )}
            <div style={{ position: 'relative', maxWidth: '150px', margin: '0 auto 32px' }}>
                <div className={css.imgWrapper}>
                    <img src={plug} alt="plug" className={css.photo} />
                </div>
                {personalLoc && (
                    <IconButton
                        color="primary"
                        size="small"
                        disableRipple
                        sx={{ position: 'absolute', bottom: '-10px', right: '10px' }}
                    >
                        <UilBrightnessPlus style={{ width: '34px', height: '34px' }} />
                    </IconButton>
                )}
            </div>

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
                <Button variant="outlined" color="primary" type="submit">
                    make an appointment
                </Button>
            )}
        </div>
    );
};
