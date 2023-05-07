import { useState } from "react";
import { Field, Form, Formik } from "formik";
import { AuthModel } from "entites/auth";
import { useAppDispatch } from "shared/api";
import { Button, Modal } from "shared/ui";

export const RememberPassword = () => {
    const dispatch = useAppDispatch();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const handleSubmit = () => setIsModalOpen(prev => !prev)


    function validateEmail(value: string) {
        let error;
        if (!value) {
            error = 'Поле обязательно для заполнения';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Не соответствует типу e-mail';
        }
        return error;
    }

    return (
        <>
            <div className="auth">
                <div className="auth__container">
                    <h3 className="auth__container_title font-title">восстановление пароля</h3>
                    <p className="auth__container_label font-text-noto">На ваш e-mail будет отправлено сообщение с новым паролем.</p>
                    <Formik initialValues={{
                        email: '',
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

                                <Button type="submit" text="Восстановить пароль" className="auth__container_btn auth__container_login font-text-noto" />
                                <span className="font-text-noto" onClick={() => dispatch(AuthModel.setModalType('auth'))}>Вспомнили пароль?</span>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <Modal title="Восстановление пароля" isOpen={isModalOpen} onClick={() => setIsModalOpen(prev => !prev)}>
                <div className="modal__body">
                    <p className="modal__body_text">
                        На ваш e-mail отправлено сообщение с новым паролем.
                    </p>
                </div>
                <div className="modal__footer">
                    <Button className="modal__footer_btn" onClick={() => setIsModalOpen(prev => !prev)} text="Закрыть" />
                </div>
            </Modal>
        </>
    )
}
