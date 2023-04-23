import { LoginForm } from 'components/Login/LoginForm';
import { RegisterForm } from 'components/Register/RegisterForm';
import css from './AuthPage.module.css';
import Medic from '../../image/Medic.png';
import { useState } from 'react';



const AuthPage = () => {
    const [booel, setBooel] = useState(true);
    return (
        <section className={css.section}>
            <div className={css.mainWraper}>
                <div className={css.wrap}>
                    <p className={css.title}>Monitor your health with the help of the MedDoc office</p>
                    <img src={Medic} alt="medic" className={css.photo} />
                </div>
                <div>{booel ? <LoginForm setBooel={setBooel} /> : <RegisterForm setBooel={setBooel} />}</div>
            </div>
        </section>
    );
};

export default AuthPage;
