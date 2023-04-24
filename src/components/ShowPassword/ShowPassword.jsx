import css from '../../components/ShowPassword/ShowPassword.module.css';

import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useState } from 'react';

// {isShown, clickHandler}
const ShowPassword = () => {
    const [isShown, setIsShown] = useState(false);

    const handleClickShow = () => setIsShown(show => !show);

    return (
        <button type="button" onClick={() => handleClickShow()} className={css.eyeBtn}>
            {isShown ? (
                <VisibilityOutlinedIcon sx={{ display: 'block', color: 'rgba(0, 0, 0, 1)' }} />
            ) : (
                <VisibilityOffOutlinedIcon sx={{ display: 'block', color: 'rgba(0, 0, 0, 0.3)' }} />
            )}
        </button>
    );
};

export default ShowPassword;
