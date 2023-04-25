import { useState } from 'react';
import ShowPassword from 'components/ShowPassword/ShowPassword';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from '..//Login/LoginForm.module.css';

// eslint-disable-next-line
const regex = '^\+?3?8?(0\d{9})$';
const passwordRules = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

const schema = yup.object().shape({
    phone: yup.string().matches(regex, 'Phone number is not valid').required('Phone is a required field'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .matches(passwordRules, 'Password must contain at least 8 characters, one uppercase, one number and one special case character'
        )
        .required('Password is a required field'),
});

export const LoginForm = () => {
    const [showPassword, setShow] = useState(false);
    // const [disabled, setDisabled] = useState(false);

    const handleClick = () => {
        setShow(show => !show);
    };
    
    const initialValues = { phone: '', password: '' };

    const handleSubmit = (values, { resetForm }) => {
        // if(values === ''){
        //     setDisabled(true);
        //     alert('disabled');
        // }
        console.log(values);
        resetForm();
    };

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
        </div>
    );
};
