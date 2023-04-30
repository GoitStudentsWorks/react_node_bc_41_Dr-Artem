import { NotificationContainer, NotificationManager } from 'react-notifications';
import ShowPassword from 'components/ShowPassword/ShowPassword';
import 'react-notifications/lib/notifications.css';
import css from '..//Login/LoginForm.module.css';
import { login } from 'redux/auth/operation';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = values => {
        const user = {
            number: values.phone,
            password: values.password,
        };
        const res = dispatch(login(user));
        res.then(el => {
            console.log(typeof el.payload);
            if (typeof el.payload === 'number') {
                if (el.payload === 400) {
                    NotificationManager.warning('Введіть логін та пароль');
                } else if (el.payload === 401) {
                    NotificationManager.error('Невірний пароль');
                }
            } else {
                NotificationManager.success('Ви авторизовані');
            }
        });
    };
    return (
        <div className={css.wrap}>
            <Formik initialValues={{ phone: '', password: '' }} onSubmit={handleSubmit}>
                <Form>
                    <ul className={css.formWraper}>
                        <li className={css.formItem}>
                            <label htmlFor="phone" className={css.label}>
                                Phone Number
                            </label>
                            <Field type="tel" name="phone" placeholder="+380 (_)__-__-__" className={css.input} />
                        </li>
                        <li className={css.formItem}>
                            <label htmlFor="password" className={css.label}>
                                Password
                            </label>
                            <div className={css.showWraper}>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className={css.input}
                                />
                                <ShowPassword />
                            </div>
                        </li>
                    </ul>
                    <button type="submit" className={css.formBtn}>
                        Log In
                    </button>
                </Form>
            </Formik>
            <NotificationContainer />
        </div>
    );
};
