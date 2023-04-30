import { NotificationContainer, NotificationManager } from 'react-notifications';
import ShowPassword from 'components/ShowPassword/ShowPassword';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from '..//Register/Register.module.css';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import { useState } from 'react';

// eslint-disable-next-line
const regex = /^\+\d{1,3}\s?s?\d{1,}\s?\d{1,}\s?\d{1,}$/;
const passwordRules = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

const schema = yup.object().shape({
    username: yup
        .string()
        .min(3, 'Username must be at least 3 characters')
        .max(200, 'Username must be less than or equal to 200 characters')
        .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field ')
        .required('Username is a required field'),
    phone: yup.string().matches(regex, 'Phone number is not valid').required('Phone is a required field'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .matches(
            passwordRules,
            'Password must contain at least 8 characters, one uppercase, one number and one special case character'
        )
        .required('Password is a required field'),
});

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = values => {
        console.log(123);
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
                    NotificationManager.error('Цей номер телефону вже зареєстрований');
                }
            } else {
                NotificationManager.success('Реєстрація успішна');
            }
        });
        // resetForm();
    };
    const [showPassword, setShow] = useState(false);
    const handleClick = () => {
        setShow(show => !show);
    };

    const initialValues = { username: '', phone: '', password: '', role: 'patient' };

    return (
        <div className={css.wrap}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
                <Form>
                    <ul className={css.formWraper}>
                        <li className={css.formItem}>
                            <label htmlFor="username" className={css.label}>
                                Name
                            </label>
                            {/* дoдати name і value до інпутів */}
                            <Field type="text" name="username" placeholder="Enter your name " className={css.input} />
                            <ErrorMessage name="username" component="span" />
                        </li>
                        <li className={css.formItem}>
                            <label htmlFor="phone" className={css.label}>
                                Phone Number
                            </label>
                            <Field type="tel" name="phone" placeholder="+380 (__)___-___-__" className={css.input} />
                            <ErrorMessage name="phone" component="span" />
                        </li>
                        <li className={css.formItem}>
                            <label htmlFor="password" className={css.label}>
                                Password
                            </label>
                            <div className={css.showWraper}>
                                {/* <ShowPassword /> */}
                                <ShowPassword handleClick={handleClick} isShown={showPassword} />
                                <Field
                                    name="password"
                                    type={showPassword ? 'true' : 'password'}
                                    placeholder="Enter your password"
                                    className={css.input}
                                />
                            </div>
                            <ErrorMessage name="password" component="span" />
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
                                    checked
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
