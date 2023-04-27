import { memo, useState } from "react";
import { ModalPropsType } from ".";
import { Button } from "shared/ui";
import { useAppSelector } from "shared/api";

const lableStatus = {
  change: "Введите новый пароль",
  check: "Введите свой текущий пароль",
  done: "Пароль успешно изменен!",
};

const ChangePasswordModal = ({ handleClick, showModal }: ModalPropsType) => {
  const [passVal, setPassVal] = useState("");
  const [newPass, setNewPass] = useState<"change" | "done" | "check">("check");
  const [isError, setIsError] = useState({
    empty: false,
    access: false,
  });

  const { currentUser } = useAppSelector((state) => state.auth);

  const changeModalView = () => {
    if (passVal.trim() === "") {
      setIsError({ empty: true, access: false });

      return;
    }

    switch (newPass) {
      case "check":
        if (passVal !== currentUser.password) {
          setIsError({ empty: false, access: true });

          return;
        }
        setNewPass("change");
        setPassVal("");
        break;

      case "change":
        handleClick(passVal);
        setNewPass("done");
        break;

      case "done":
        showModal();
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="modal__body">
        <label className="modal__text">{lableStatus[newPass]}</label>

        {newPass !== "done" && (
          <>
            <input
              onChange={(e) => setPassVal(e.target.value)}
              name={"password"}
              value={passVal}
            />

            {isError.empty && (
              <p style={{ color: "red" }}>Поле не может быть пустым!</p>
            )}
            {isError.access && (
              <span style={{ color: "red" }}>Пароли не совпадают</span>
            )}
          </>
        )}
      </div>
      <div className="modal__footer">
        <Button
          className="modal__footer_btn settings__btn settings__btn_delete"
          onClick={() => {
            changeModalView();
          }}
          text={newPass !== "done" ? "Продолжить" : "Закрыть"}
        />
      </div>
    </>
  );
};

export default memo(ChangePasswordModal);
