import { useState } from "react";
import { Field, Form, Formik } from "formik";
import { AuthModel } from "entites/auth";
import { useAppDispatch } from "shared/api";
import { Button } from "shared/ui";

export const RememberPassword = () => {
    const dispatch = useAppDispatch()

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <div className="auth">
            <div className="auth__container">
                <h3 className="auth__container_title font-title">восстановление пароля</h3>
                <p className="auth__container_label font-text-noto">На ваш e-mail будет отправлено сообщение с новым паролем.</p>
                <Formik initialValues={{
                    email: '',
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

                        <Button text="Восстановить пароль" className="auth__container_btn auth__container_login font-text-noto" />
                        <span className="font-text-noto" onClick={() => dispatch(AuthModel.setModalType('auth'))}>Вспомнили пароль?</span>
                    </Form>
                </Formik>
                <form>
                </form>
            </div>
        </div>
    )
}
