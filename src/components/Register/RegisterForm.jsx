import { NotificationContainer, NotificationManager } from 'react-notifications';

import ShowPassword from 'components/ShowPassword/ShowPassword';
import { Field, Form, Formik } from 'formik';
import css from '..//Register/Register.module.css';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = values => {
        const newUser = {
            name: values.username,
            number: values.phone,
            password: values.password,
            role: values.role,
        };
        const res = dispatch(register(newUser));
        res.then(el => {
            console.log(typeof el.payload);
            if (typeof el.payload === 'number') {
                if (el.payload === 400) {
                    NotificationManager.warning('Заповніть всі поля реєстрації');
                } else if (el.payload === 409) {
                    NotificationManager.error('Цей номер вже зареєстрований');
                }
            } else {
                NotificationManager.success('Реєстрація успішна');
            }
        });
    };
    return (
        <div className={css.wrap}>
            <Formik initialValues={{ username: '', phone: '', password: '', role: 'patient' }} onSubmit={handleSubmit}>
                <Form>
                    <ul className={css.formWraper}>
                        <li className={css.formItem}>
                            <label htmlFor="username" className={css.label}>
                                Name
                            </label>
                            {/* дoдати name і value до інпутів */}
                            <Field type="text" name="username" placeholder="Enter your name " className={css.input} />
                        </li>
                        <li className={css.formItem}>
                            <label htmlFor="phone" className={css.label}>
                                Phone Number
                            </label>
                            <Field type="tel" name="phone" placeholder="+380 (__)___-___-__" className={css.input} />
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
                        <li className={css.formItem}>
                            {/* RADIO */}
                            <div className={css.radio}>
                                <Field
                                    id="patient"
                                    name="role"
                                    value="patient"
                                    type="radio"
                                    className={css.radioInput}
                                />
                                <label htmlFor="patient" className={css.radioLabel}>
                                    Patient
                                </label>

                                <Field id="doctor" name="role" value="doctor" type="radio" className={css.radioInput} />
                                <label htmlFor="doctor" className={css.radioLabel}>
                                    Doctor
                                </label>
                            </div>
                        </li>
                    </ul>
                    <button type="submit" className={css.formBtn}>
                        Registration
                    </button>
                </Form>
            </Formik>
            <NotificationContainer />
        </div>
    );
};
