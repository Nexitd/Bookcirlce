import { Formik, Form, Field } from "formik";
import { AuthModel } from "entites/auth";
import { useAppDispatch } from "shared/api";
import { UserAuthDataType } from "shared/types";
import { Button, Input } from "shared/ui";


export const Login = () => {
    const dispatch = useAppDispatch()

    const handleSubmit = (values: UserAuthDataType) => {
        dispatch(AuthModel.authByUser(values))
    }

    return (
        <div className="auth">
            <div className="auth__container">
                <h3 className="auth__container_title font-title">Авторизация</h3>

                <Formik initialValues={{
                    email: '',
                    password: ''
                }} onSubmit={handleSubmit}>
                    <Form className="auth__form">
                        <div className="auth__form_item">
                            <label htmlFor="email" className="auth__form_label">Email</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="jane@acme.com"
                                type="email"
                            />
                        </div>

                        <div className="auth__form_item">
                            <label htmlFor="password" className="auth__form_label">Пароль</label>

                            <Input />
                        </div>

                        <span className="font-text-noto" onClick={() => dispatch(AuthModel.setModalType('remember'))}>Забыли пароль?</span>

                        <Button text="Войти" type="submit" className="auth__container_login auth__container_btn font-text-noto" />
                        <Button text="Зарегестрироваться" type="button" className="auth__container_reg auth__container_btn font-text-noto" onClick={() => dispatch(AuthModel.setModalType('registration'))} />
                    </Form>
                </Formik>
            </div>
        </div >
    )
}
