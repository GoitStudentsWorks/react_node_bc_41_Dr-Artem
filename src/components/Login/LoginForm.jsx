import ShowPassword from 'components/ShowPassword/ShowPassword';
import { Field, Form, Formik } from 'formik';
import css from '..//Login/LoginForm.module.css';

export const LoginForm = () => {
    return (
        <div className={css.wrap}>
            <Formik>
                <Form>
                    <ul className={css.formWraper}>
                        <li className={css.formItem}>
                            <label htmlFor="phone" className={css.label}>
                                Phone Number
                            </label>
                            <Field
                                type="tel"
                                // name="phone"
                                placeholder="+380 (_)__-__-__"
                                className={css.input}
                            />
                        </li>
                        <li className={css.formItem}>
                            <label htmlFor="password" className={css.label}>
                                Password
                            </label>
                            <div className={css.showWraper}>
                                <Field
                                    type="password"
                                    // name="password"
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
        </div>
    );
};
