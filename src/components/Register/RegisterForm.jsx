import ShowPassword from 'components/ShowPassword/ShowPassword';
import { Field, Form, Formik } from 'formik';
import css from '..//Register/Register.module.css';

export const RegisterForm = () => {
    // const initialValues = { username: '', email: '', password: '', role: '' };
    return (
        <div className={css.wrap}>
            <Formik>
                <Form>
                    <ul className={css.formWraper}>
                        <li className={css.formItem}>
                            <label htmlFor="username" className={css.label}>
                                Name
                            </label>
                            {/* дoдати name і value до інпутів */}
                            <Field type="text" placeholder="Enter your name " className={css.input} />
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
                                <Field type="password" placeholder="Enter your password" className={css.input} />
                                <ShowPassword />
                            </div>
                        </li>
                        <li className={css.formItem}>
                            {/* RADIO */}
                            <div className={css.radio}>
                                <Field
                                    id="patient"
                                    // name="role"
                                    // value="patient"
                                    type="radio"
                                    className={css.radioInput}
                                    checked
                                />
                                <label htmlFor="patient" className={css.radioLabel}>
                                    Patient
                                </label>

                                <Field
                                    id="doctor"
                                    // name="role"
                                    // value="doctor"
                                    type="radio"
                                    className={css.radioInput}
                                />
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
        </div>
    );
};
