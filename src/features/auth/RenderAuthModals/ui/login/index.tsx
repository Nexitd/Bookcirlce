import { Formik, Form, Field } from "formik";
import { AuthModel } from "entites/auth";
import { useAppDispatch, useAppSelector } from "shared/api";
import { UserAuthDataType } from "shared/types";
import { Button } from "shared/ui";
import { useState } from "react";


export const Login = () => {
    const dispatch = useAppDispatch();
    const { isError } = useAppSelector(state => state.auth)
    const [isPassVisible, setIsPassVisible] = useState<boolean>(false);
    // авторизация
    const handleSubmit = (values: UserAuthDataType) => {
        dispatch(AuthModel.authByUser(values))
    }

    function validateEmail(value: string) {
        let error;
        if (!value) {
            error = 'Поле обязательно для заполнения';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Не соответствует типу e-mail';
        }
        return error;
    }

    function validatePassword(value: string) {
        let error;
        if (!value) {
            error = 'Поле обязательно для заполнения';
        }

        return error
    }
    
    return (
        <div className="auth">
            <div className="auth__container">
                <h3 className="auth__container_title font-title">Авторизация</h3>

                <Formik initialValues={{
                    email: '',
                    password: ''
                }} onSubmit={handleSubmit}>
                    {({ errors, touched, isValidating }) => (
                        <Form className="auth__form">
                            <div className="auth__form_item">
                                <label htmlFor="email" className="auth__form_label">Email</label>
                                <Field
                                    id="email"
                                    name="email"
                                    placeholder="jane@acme.com"
                                    type="email"
                                    validate={validateEmail}
                                />
                                {errors.email && touched.email && <p style={{ color: "red", textAlign: "center", margin: '10px 0 0' }}>{errors.email}</p>}
                            </div>

                            <div className="auth__form_item">
                                <label htmlFor="password" className="auth__form_label">Пароль</label>

                                <div className="input__container_item">
                                    <Field validate={validatePassword} id="password" name="password" type={!isPassVisible ? 'password' : 'textt'} className="inp font-text-noto" />
                                    <button onClick={() => setIsPassVisible(prev => !prev)} type="button" className="font-text-noto">
                                        {!isPassVisible ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5 8C10.5 9.38071 9.38071 10.5 8 10.5C6.61929 10.5 5.5 9.38071 5.5 8C5.5 6.61929 6.61929 5.5 8 5.5C9.38071 5.5 10.5 6.61929 10.5 8Z" fill="#222222" />
                                            <path d="M0 8C0 8 3 2.5 8 2.5C13 2.5 16 8 16 8C16 8 13 13.5 8 13.5C3 13.5 0 8 0 8ZM8 11.5C9.933 11.5 11.5 9.933 11.5 8C11.5 6.067 9.933 4.5 8 4.5C6.067 4.5 4.5 6.067 4.5 8C4.5 9.933 6.067 11.5 8 11.5Z" fill="#222222" />
                                        </svg> :
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.7904 12.9117L9.17617 11.2975C8.80858 11.4286 8.41263 11.5 8 11.5C6.067 11.5 4.5 9.93303 4.5 8.00004C4.5 7.58741 4.5714 7.19146 4.70253 6.82387L2.64112 4.76246C0.938717 6.27906 0 8.00004 0 8.00004C0 8.00004 3 13.5 8 13.5C9.01539 13.5 9.9483 13.2732 10.7904 12.9117Z" fill="#222222" />
                                                <path d="M5.20967 3.08837C6.05172 2.72686 6.98462 2.50004 8 2.50004C13 2.50004 16 8.00004 16 8.00004C16 8.00004 15.0613 9.72101 13.3589 11.2376L11.2975 9.17618C11.4286 8.8086 11.5 8.41266 11.5 8.00004C11.5 6.06704 9.933 4.50004 8 4.50004C7.58738 4.50004 7.19144 4.57144 6.82386 4.70256L5.20967 3.08837Z" fill="#222222" />
                                                <path d="M5.52485 7.64619C5.50847 7.76178 5.5 7.87992 5.5 8.00004C5.5 9.38075 6.61929 10.5 8 10.5C8.12012 10.5 8.23825 10.4916 8.35385 10.4752L5.52485 7.64619Z" fill="#222222" />
                                                <path d="M10.4752 8.35386L7.64618 5.52488C7.76176 5.50851 7.87989 5.50004 8 5.50004C9.38071 5.50004 10.5 6.61933 10.5 8.00004C10.5 8.12014 10.4915 8.23827 10.4752 8.35386Z" fill="#222222" />
                                                <path d="M13.6464 14.3536L1.64645 2.35359L2.35355 1.64648L14.3536 13.6465L13.6464 14.3536Z" fill="#222222" />
                                            </svg>
                                        }
                                    </button>
                                </div >
                                {errors.password && touched.password && <p style={{ color: "red", textAlign: "center", margin: '10px 0 0' }}>{errors.password}</p>}
                            </div>

                            {isError && <p style={{ color: "red", textAlign: "center", margin: '10px 0 0' }}>Неверный логин или пароль</p>}
                            <span className="font-text-noto" onClick={() => dispatch(AuthModel.setModalType('remember'))}>Забыли пароль?</span>

                            <Button text="Войти" type="submit" className="auth__container_login auth__container_btn font-text-noto" />
                            <Button text="Зарегестрироваться" type="button" className="auth__container_reg auth__container_btn font-text-noto" onClick={() => dispatch(AuthModel.setModalType('registration'))} />
                        </Form>
                    )}
                </Formik>
            </div>
        </div >
    )
}
