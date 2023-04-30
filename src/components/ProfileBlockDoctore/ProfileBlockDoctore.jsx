import { UilPen } from '@iconscout/react-unicons';
import { Button, Typography } from '@mui/material';
import { Badge } from 'components/Badge/Badge';
import Card from 'components/Card/Card';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import StarRating from 'components/StarRating/StarRating';
import { useLocation } from 'react-router';
import css from './ProfileBlockDoctore.module.css';

const ident = 1;

export const ProfileBlockDoctore = ({ children }) => {
    const personalLoc = useLocation().pathname.startsWith(`/doctor/personal/${ident}`);
    return (
        <Card>
            <Badge>Doctor</Badge>
            <StarRating />
            <ProfileImage personalLoc={personalLoc} />
            <div style={{ textAlign: 'center' }}>
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
                {personalLoc && (
                    <Button color="primary">
                        <UilPen style={{ width: '20px', height: '20px' }} />
                        <Typography color="text.black" sx={{ lineHeight: 1.285, textTransform: 'none' }}>
                            Edit profile
                        </Typography>
                    </Button>
                )}
                {children}
            </div>
        </Card>
    );
};
