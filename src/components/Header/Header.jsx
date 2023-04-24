import AuthNav from 'components/AuthNav/AuthNav';
import Logo from 'components/Logo/Logo';
import InformationBlock from 'components/InformationBlock/InformationBlock';
import s from '../Header/Header.module.css';

function Header() {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <Logo />
                <AuthNav />
            </div>
            <InformationBlock />
        </div>
    );
}

export default Header;
