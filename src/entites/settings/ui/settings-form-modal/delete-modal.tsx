import { memo } from "react";
import { ModalPropsType } from ".";
import { Button } from "shared/ui";

const DeleteModal = ({ handleClick, showModal }: ModalPropsType) => {
  return (
    <>
      <div className="modal__body">
        <p className="modal__text">Вы действительно хотите удалить аккаунт?</p>
      </div>
      <div className="modal__footer">
        <Button
          className="settings__btn_cancel settings__btn"
          text="Отмена"
          onClick={showModal}
        />
        <Button
          className="modal__footer_btn settings__btn settings__btn_delete"
          onClick={() => {
            // удаление
            handleClick();
            // закрытие модалки
            showModal();
          }}
          text="Продолжить"
        />
      </div>
    </>
  );
};

export default memo(DeleteModal);
