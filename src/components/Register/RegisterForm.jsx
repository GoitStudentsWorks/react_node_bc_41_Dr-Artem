import { Field, Form, Formik } from 'formik';
import css from '..//Register/Register.module.css';
import ShowPassword from 'components/ShowPassword/ShowPassword';

export const RegisterForm = ({ setBooel }) => {
    // const initialValues = { username: '', email: '', password: '', role: '' };

    return (
        <div className={css.mainWraper}>
            <div>
                <ul className={css.list}>
                    <li>
                        <span href="/" className={css.link} onClick={() => setBooel(false)}>
                            Registration
                        </span>
                    </li>
                    <li>
                        <span href="/" className={css.link} onClick={() => setBooel(true)}>
                            Log In
                        </span>
                    </li>
                </ul>
            </div>
            <div className={css.wrap}>
                <Formik>
                    <Form>
                        <div className={css.formWraper}>
                            <label htmlFor="username" className={css.label}>
                                Name
                            </label>
                            {/* дoдати name і value до інпутів */}
                            <Field type="text" placeholder="Enter your name " className={css.input} />
                            <label htmlFor="phone" className={css.label}>
                                Phone Number
                            </label>
                            <Field type="tel" placeholder="+380 (__)___-___-__" className={css.input} />

                            <label htmlFor="password" className={css.label}>
                                Password
                            </label>
                            <Field type="password" placeholder="Enter your password" className={css.input} />
                            <span className={css.showWraper}>
                            <ShowPassword />
                            </span>
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

                            <span className={css.btnWrap}>
                                <button type="submit" className={css.formBtn}>
                                    Registration
                                </button>
                            </span>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};
