import { NavLink } from 'react-router-dom';
import s from '../AuthNav/AuthNav.module.css';

function AuthNav() {
    return (
        <div className={s.auth_wrapper}>
            <ul className={s.nav_list}>
                <li className={s.nav_item}>
                    <NavLink to="auth/register" className={s.nav_link}>
                        Registration
                    </NavLink>
                </li>

                <li className={s.nav_item}>
                    <NavLink to="auth/login" className={s.nav_link}>
                        Log In
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default AuthNav;
