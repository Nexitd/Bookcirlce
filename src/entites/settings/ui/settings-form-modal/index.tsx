import { deleteUser } from "entites/auth/model";
import { Field } from "formik";
import { Dispatch, SetStateAction } from "react";
import { useAppDispatch, useAppSelector } from "shared/api"
import { Button } from "shared/ui";

type SettingsFormModalPropsType = {
    modalType: "password" | "delete";
    showModal: () => void | any;
}

type DeleteModalModalPropsType = {
    handleClick: () => void;
    showModal: () => void
}

const DeleteModal = ({ handleClick, showModal }: DeleteModalModalPropsType) => {
    return <>
        <div className="modal__body">
            <p className="modal__text">Вы действительно хотите удалить аккаунт?</p>
        </div>
        <div className="modal__footer">
            <Button className='settings__btn_cancel settings__btn' text="Отмена" onClick={showModal} />
            <Button className="modal__footer_btn settings__btn settings__btn_delete" onClick={() => {
                handleClick();
                showModal();
            }} text="Продолжить" />
        </div>
    </>
}

const ChangePasswordModal = () => {


    return <>
        <div className="modal__body">
            <label className="modal__text">Введите свой текущий пароль</label>

            <Field />
        </div>
        <div className="modal__footer">
            <Button className="modal__footer_btn settings__btn settings__btn_delete" text="Продолжить" />
        </div>
    </>
}

export const SettingsFormModal = ({ modalType, showModal }: SettingsFormModalPropsType) => {
    const { currentUser } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();


    return modalType === "delete" ? <DeleteModal
        showModal={showModal}
        handleClick={() => dispatch(deleteUser(currentUser.id))} />
        : <ChangePasswordModal />
}