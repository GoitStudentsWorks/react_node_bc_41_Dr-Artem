import { UilBrightnessPlus, UilPen } from '@iconscout/react-unicons';
import { Button, IconButton, Typography } from '@mui/material';
import { Badge } from 'components/Badge/Badge';
import StarRating from 'components/StarRating/StarRating';
import { useLocation } from 'react-router';
import plug from '../../images/ProfileBlock/plug.png';
import css from './ProfileBlockDoctore.module.css';

export const ProfileBlockDoctore = () => {
    const personalLoc = useLocation().pathname.startsWith('/doctor/personal/');
    return (
        <div className={css.wrapper}>
            <Badge>Doctor</Badge>
            <StarRating />
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
                    Name:<p className={css.data}>Shumeiko Timur Bohdanovich</p>
                </li>
                {personalLoc && (
                    <li className={css.item}>
                        Gender:<p className={css.data}>Male</p>
                    </li>
                )}

                <li className={css.item}>
                    Date of birth:<p className={css.data}>12/05/1992</p>
                </li>
                <li className={css.item}>
                    Phone number:<p className={css.data}>+380 (97) 77 77 7 77</p>
                </li>
                <li className={css.item}>
                    Price:<p className={css.data}>750 UAH /1 hour</p>
                </li>
            </ul>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {personalLoc ? (
                    <Button color="primary">
                        <UilPen style={{ width: '20px', height: '20px' }} />
                        <Typography color="text.primary" sx={{ lineHeight: 1.285, textTransform: 'none' }}>
                            Edit profile
                        </Typography>
                    </Button>
                ) : (
                    <Button variant="outlined" color="primary">
                        View profile
                    </Button>
                )}
            </div>
        </div>
    );
};
