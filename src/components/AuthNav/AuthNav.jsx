import s from '../AuthNav/AuthNav.module.css';

function AuthNav() {
    return (
        <div className={s.auth_wrapper}>
            <ul className={s.nav_list}>
                <li className={s.nav_item}>
                    <a href="#" className={s.nav_link}>
                        Registration
                    </a>
                </li>

                <li className={s.nav_item}>
                    <a href="#" className={s.nav_link}>
                        Log In
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default AuthNav;
