import { Field, Form, Formik } from "formik";
import { AuthModel } from "entites/auth";
import { useAppDispatch, useAppSelector } from "shared/api";
import { UserRegistrationDataType } from "shared/types";
import { Button, Input, Modal } from "shared/ui";
import { useEffect, useState } from "react";


export const Registration = () => {
    const dispatch = useAppDispatch();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const { isSuccess } = useAppSelector(state => state.auth)
    const handleSubmit = (data: UserRegistrationDataType) => {
        dispatch(AuthModel.createNewUser(data))
    }




    useEffect(() => {
        if (isSuccess) {
            setIsModalOpen(prev => !prev)
        }
    }, [isSuccess])

    return (
        <>
            <div className="auth">
                <div className="auth__container">
                    <h3 className="auth__container_title font-title">регистрация</h3>
                    <p className="font-text-noto auth__container_subtitle">Все поля обязательны для заполнения.</p>

                    <Formik initialValues={
                        {
                            birth_date: new Date().toUTCString(),
                            role: 0,
                            email: '',
                            name: '',
                            surname: '',
                            password: ''
                        }
                    }
                        onSubmit={handleSubmit}
                    >
                        <Form className="auth__form">
                            <p className="auth__form_label font-text-noto">Тип аккаунта</p>
                            <div className="auth__container_accounts" id="auth__container_auccounts">
                                <div role="group" aria-labelledby="auth__container_accounts" className="auth__accounts_item">
                                    <label>
                                        <Field type="radio" name="account_type" value="1" />
                                        Модератор
                                    </label>
                                    <label>
                                        <Field type="radio" name="account_type" value="2" />
                                        Участник
                                    </label>
                                </div>
                            </div>

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
                                <label htmlFor="name" className="auth__form_label">Имя</label>
                                <Field
                                    id="name"
                                    name="name"
                                    placeholder="Имя"
                                />
                            </div>
                            <div className="auth__form_item">
                                <label htmlFor="surname" className="auth__form_label">Фамилия</label>
                                <Field
                                    id="surname"
                                    name="surname"
                                    placeholder="Фамилия"
                                />
                            </div>
                            <div className="auth__form_item">
                                <label htmlFor="password" className="auth__form_label">Пароль</label>
                                <Input />
                            </div>

                            <div className="auth__form_textblock">
                                <input type="radio" id="succsess" />
                                <label htmlFor="succsess">Я принимаю условия <span>Пользовательского соглашения и Политики обработки персональных данных</span></label>
                            </div>

                            <Button text="Зарегестрироваться" type="submit" className="auth__container_login auth__container_btn font-text-noto" />
                            <span className="font-text-noto" onClick={() => dispatch(AuthModel.setModalType('auth'))}>Есть аккаунт? Войти</span>
                        </Form>
                    </Formik>
                </div>
            </div>

            <Modal title="Регистрация" onClick={() => setIsModalOpen(prev => !prev)} isOpen={isModalOpen}>
                <div className="modal__body">
                    <p className="modal__text">Регистрация прошла успешно!</p>
                </div>
                <div className="modal__footer">
                    <Button className="modal__footer_btn" onClick={() => setIsModalOpen(prev => !prev)} text="Закрыть" />
                </div>
            </Modal>
        </>
    )
}

