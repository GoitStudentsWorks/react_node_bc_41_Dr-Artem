import { NotificationContainer, NotificationManager } from 'react-notifications';
import ShowPassword from 'components/ShowPassword/ShowPassword';
import 'react-notifications/lib/notifications.css';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from '../Login/LoginForm.module.css';
import { login } from 'redux/auth/operation';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
// eslint-disable-next-line
const regex = /^\+\d{1,3}\s?s?\d{1,}\s?\d{1,}\s?\d{1,}$/;
const passwordRules = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

const schema = yup.object().shape({
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
                    NotificationManager.warning('Введіть номер телефону та пароль');
                } else if (el.payload === 401) {
                    NotificationManager.error('Невірний номер телефону або пароль');
                }
            } else {
                NotificationManager.success('Ви авторизовані');
            }
        });
    };
    const [showPassword, setShow] = useState(false);
    // const [disabled, setDisabled] = useState(false);

    const handleClick = () => {
        setShow(show => !show);
    };

    const initialValues = { phone: '', password: '' };

    return (
        <div className={css.wrap}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
                <Form>
                    <ul className={css.formWraper}>
                        <li className={css.formItem}>
                            <label htmlFor="phone" className={css.label}>
                                Phone Number
                            </label>
                            <Field type="tel" name="phone" placeholder="+380 (_)__-__-__" className={css.input} />

                            <ErrorMessage name="phone" component="span" />
                        </li>
                        <li className={css.formItem}>
                            <label htmlFor="password" className={css.label}>
                                Password
                            </label>
                            <div className={css.showWraper}>
                                <Field
                                    type={showPassword ? 'true' : 'password'}
                                    name="password"
                                    placeholder="Enter your password"
                                    className={css.input}
                                />
                                <ShowPassword isShown={showPassword} handleClick={handleClick} />
                            </div>
                            <ErrorMessage name="password" component="span" />
                        </li>
                    </ul>
                    <button type="submit" className={css.formBtn}>
                        {/* disabled={disabled}  */}
                        Log In
                    </button>
                </Form>
            </Formik>
            <NotificationContainer />
        </div>
    );
};
