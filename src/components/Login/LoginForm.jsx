import { Field, Form, Formik } from 'formik';
import css from '..//Login/LoginForm.module.css'
import ShowPassword from 'components/ShowPassword/ShowPassword';

export const LoginForm = ({setBooel}) => {
    return (
        <div style={{marginLeft: '20px'}}>
            <div>
                <ul className={css.list}>
                    <li>
                        <span href="/" className={css.link} onClick={()=> setBooel(false)}>Registration</span>
                    </li>
                    <li>
                        <span href="/" className={css.link} onClick={()=> setBooel(true)}>Log In</span>
                    </li>
                </ul>
            </div>
            <div className={css.wrap}>
                <Formik>
                    <Form>
                        <div className={css.formWraper}>
                            <label htmlFor="phone"  className={css.label}>Phone Number</label>
                            <Field type="tel" name="phone" placeholder="+380 (_)__-__-__"  className={css.input}/>

                            <label htmlFor="password" className={css.label}>Password </label>
                            <Field type="password" name="password" placeholder="Enter your password" className={css.input}/>
                            <span className={css.showWraper}>
                            <ShowPassword/>
                            </span>
                        </div>
                        <span className={css.btnWrap}>
                        <button type="submit" className={css.formBtn}>Log In</button>
                        </span>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};
