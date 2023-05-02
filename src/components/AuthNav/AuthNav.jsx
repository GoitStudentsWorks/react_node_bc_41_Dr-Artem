import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import s from '../AuthNav/AuthNav.module.css';

function AuthNav() {
    return (
        <div className={s.auth_wrapper}>
            <ul className={s.nav_list}>
                <li className={s.nav_item}>
                    <NavLink to="auth/register">
                        <Button
                            variant="outlined"
                            color="primaryAuth"
                            disableElevation
                            sx={{
                                p: { md: '12px 32px' },
                                borderRadius: { md: '12px' },
                                fontSize: { md: '14px' },
                                lineHeight: { md: 1.428 },
                            }}
                        >
                            Registration
                        </Button>
                    </NavLink>
                </li>

                <li className={s.nav_item}>
                    <NavLink to="auth/login">
                        <Button
                            variant="contained"
                            color="secondaryAuth"
                            disableElevation
                            sx={{
                                p: { md: '12px 32px' },
                                borderRadius: { md: '12px' },
                                fontSize: { md: '14px' },
                                lineHeight: { md: 1.428 },
                            }}
                        >
                            Log In
                        </Button>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default AuthNav;
