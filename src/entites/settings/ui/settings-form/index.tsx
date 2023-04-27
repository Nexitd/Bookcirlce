import { useCallback, useState } from "react";
import { Field, Form, Formik } from "formik";
import moment from "moment";
import { useAppSelector } from "shared/api";
import { Button, Modal } from "shared/ui";
import { SettingsFormModal } from "../settings-form-modal/index";

export const SettingsForm = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const [fileName, setFileName] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"password" | "delete">("delete");

  const handleSubmit = () => {};

  const showModal = useCallback(
    () => setIsModalVisible((prev) => !prev),
    [isModalVisible]
  );

  const btnCopyClick = (str: string) => {
    navigator.clipboard.writeText(str);
  };

  return (
    <div className="settings__container">
      <h1 className="settings__container_title">данные аккаунта</h1>
      <div className="settings__container_item">
        <img src={currentUser.avatar} alt="" />
        <span className="settings__container_name">
          {currentUser.name} {currentUser.surname}
        </span>
      </div>
      <Formik
        initialValues={{
          name: currentUser.name,
          surname: currentUser.surname,
          birth_date: moment(currentUser.birth_date).format("yyyy-MM-DD"),
          id: currentUser.id,
          sex: currentUser.sex,
          email: currentUser.email,
          password: currentUser.password,
        }}
        onSubmit={handleSubmit}
      >
        <Form className="settings__form">
          <div className="settings__form_container">
            <div className="settings__form_item">
              <div className="settings__form_blocks">
                <label htmlFor="name">Имя</label>
                <Field id="name" name="name" />
              </div>

              <div className="settings__form_blocks">
                <label htmlFor="birth_date">Дата рождения</label>
                <Field id="birth_date" name="birth_date" type="date" />
                <p className="settings__form_subtext">
                  Дата рождения формате ДД/ММ/ГГ
                </p>
              </div>

              <div className="settings__form_blocks">
                <label>Изображение профиля</label>

                <label className="settings__form_blocks-file" htmlFor="image">
                  <div className="settings__form_blocks-fileinp">
                    <span>Выбрать файл</span>
                  </div>
                  <div className="settings__form_blocks-filename">
                    {fileName}
                  </div>
                  <Field
                    id="image"
                    name="image"
                    type="file"
                    onChange={(e: any) => setFileName(e.target.files[0].name)}
                  />
                </label>
              </div>
            </div>
            <div className="settings__form_item">
              <div className="settings__form_blocks">
                <label htmlFor="surname">Фамилия</label>

                <Field id="surname" name="surname" />
              </div>
              <div className="settings__form_blocks">
                <label htmlFor="sex">Пол</label>

                <Field
                  id="sex"
                  name="sex"
                  as="select"
                  defaultValue={currentUser.sex}
                >
                  <option value="мужской">Мужской</option>
                  <option value="женский">Женский</option>
                </Field>
              </div>
              <div className="settings__form_blocks settings__form_blocks-id">
                <label htmlFor="id">ID</label>
                <div className="settings__copy">
                  <Field id="id" name="id" readOnly />
                  <button
                    className="settings__copy_btn"
                    type="button"
                    onClick={() => btnCopyClick(currentUser.id.toString())}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 0H6C4.89543 0 4 0.89543 4 2C2.89543 2 2 2.89543 2 4V14C2 15.1046 2.89543 16 4 16H11C12.1046 16 13 15.1046 13 14C14.1046 14 15 13.1046 15 12V2C15 0.89543 14.1046 0 13 0ZM13 13V4C13 2.89543 12.1046 2 11 2H5C5 1.44772 5.44772 1 6 1H13C13.5523 1 14 1.44772 14 2V12C14 12.5523 13.5523 13 13 13ZM3 4C3 3.44772 3.44772 3 4 3H11C11.5523 3 12 3.44772 12 4V14C12 14.5523 11.5523 15 11 15H4C3.44772 15 3 14.5523 3 14V4Z"
                        fill="#222222"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="settings__form_auth">
            <div className="settings__form_item">
              <h2 className="settings__subtitle">вход</h2>

              <div className="settings__form_blocks">
                <label htmlFor="email">Почта</label>
                <div className="settings__form_blocks-flex">
                  <Field type="email" id="email" name="email" />
                  <div className="settings__form_blocks-change">
                    <span>Изменить</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="settings__form_item">
              <div className="settings__form_blocks">
                <label htmlFor="password">Пароль</label>
                <div className="settings__form_blocks-flex">
                  <Field id="password" name="password" type="password" />
                  <div
                    className="settings__form_blocks-change"
                    onClick={() => {
                      setModalType("password");
                      showModal();
                    }}
                  >
                    <span>Изменить</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="settings__form_controls">
            <Button
              text="Удалить профиль"
              className="control__delete control__btn"
              onClick={() => {
                setModalType("delete");
                showModal();
              }}
            />
            <div>
              <Button
                text="Отменить"
                className="control__btn control__cancel"
              />
              <Button text="Сохранить" className="control__btn" />
            </div>
          </div>
        </Form>
      </Formik>

      <Modal
        isOpen={isModalVisible}
        onClick={showModal}
        title={
          modalType === "password" ? "Изменение пароля" : "Подтвердите действие"
        }
      >
        <SettingsFormModal modalType={modalType} showModal={showModal} />
      </Modal>
    </div>
  );
};
