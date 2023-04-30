import { UilBrightnessPlus } from '@iconscout/react-unicons';
import { IconButton } from '@mui/material';
import plug from '../../images/ProfileBlock/plug.png';
import css from './ProfileImage.module.css';

const ProfileImage = ({ personalLoc }) => {
    return (
        <div style={{ position: 'relative' }}>
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
    );
};
export default ProfileImage;
