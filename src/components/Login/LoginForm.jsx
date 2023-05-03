import { Button, InputAdornment, InputLabel, TextField } from '@mui/material';
import ShowPassword from 'components/ShowPassword/ShowPassword';
import { useFormik } from 'formik';
import { useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from 'redux/auth/operation';
import { getAllUsersForRole, getUserInfo } from 'redux/info/operation';
import * as yup from 'yup';
import css from '../Login/LoginForm.module.css';
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
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSubmitForm = values => {
        const user = {
            number: values.phone,
            password: values.password,
        };
        const res = dispatch(login(user));
        res.then(el => {
            console.log(el.payload);
            if (typeof el.payload === 'number') {
                if (el.payload === 400) {
                    NotificationManager.warning('Введіть номер телефону та пароль');
                } else if (el.payload === 401) {
                    NotificationManager.error('Невірний номер телефону або пароль');
                }
            } else {
                NotificationManager.success('Ви авторизовані');
                navigate('/doctor');
            }
        });
    };
    const [showPassword, setShow] = useState(false);
    // const [disabled, setDisabled] = useState(false);

    const handleClick = () => {
        setShow(show => !show);
    };

    const formik = useFormik({
        initialValues: {
            phone: '',
            password: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            handleSubmitForm(values);
        },
    });

    return (
        <div className={css.wrap}>
            <form onSubmit={formik.handleSubmit}>
                <ul className={css.formWraper}>
                    <li className={css.formItem}>
                        <InputLabel htmlFor="phone" className={css.label}>
                            Phone Number
                        </InputLabel>
                        <TextField
                            fullWidth
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+380"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                        />
                    </li>
                    <li className={css.formItem}>
                        <InputLabel htmlFor="password" className={css.label}>
                            Password
                        </InputLabel>
                        <div className={css.showWraper}>
                            <TextField
                                fullWidth
                                id="password"
                                name="password"
                                type={showPassword ? 'true' : 'password'}
                                placeholder="Enter your password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <ShowPassword isShown={showPassword} handleClick={handleClick} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                    </li>
                </ul>
                {formik.values.phone && formik.values.password === '' ? (
                    <Button disabled variant="contained" color="secondary" disableElevation type="submit">
                        Log In
                    </Button>
                ) : (
                    <Button variant="contained" color="secondary" disableElevation type="submit">
                        Log In
                    </Button>
                )}
            </form>
            <NotificationContainer />
        </div>
    );
};
