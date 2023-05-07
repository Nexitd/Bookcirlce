import { memo, useState } from "react";
import { ModalPropsType } from ".";
import { Button } from "shared/ui";
import { useAppSelector } from "shared/api";


// тексты для разных состояний модалки
const lableStatus = {
  change: "Введите новый пароль",
  check: "Введите свой текущий пароль",
  done: "Пароль успешно изменен!",
};

const ChangePasswordModal = ({ handleClick, showModal }: ModalPropsType) => {
  // значение введенного пароля
  const [passVal, setPassVal] = useState("");
  // стейты для переходов на кнопки
  const [newPass, setNewPass] = useState<"change" | "done" | "check">("check");
  // стейты с ошибкой и доступом
  const [isError, setIsError] = useState({
    empty: false,
    access: false,
  });

  // текущий юзер

  const { currentUser } = useAppSelector((state) => state.auth);

  // изменение содержимого
  const changeModalView = () => {
    // если введенное знаечие равно пустой строке - меняем статус ошибки на empty 
    // после этого вызывается ошибка что поле не может быть путсым
    if (passVal.trim() === "") {
      setIsError({ empty: true, access: false });

      return;
    }

    // передаем тип контента
    switch (newPass) {
      case "check":
        // провереям совпадает ли введенный пароль с паролем текущего юзера
        // если нет, показываем сообщение об ошибке
        if (passVal !== currentUser.password) {
          setIsError({ empty: false, access: true });

          return;
        }
        // если все нормально обнуляем введенное значение и переводим пользователя на окно
        // с вводом нового пароля
        setNewPass("change");
        setPassVal("");
        break;

      case "change":
        // вызываем функция изменения пароля и меняем контент
        handleClick(passVal);
        setNewPass("done");
        break;

      case "done":
        // закрываем модалку
        showModal();
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="modal__body">
        {/* рендерим текст */}
        <label className="modal__text">{lableStatus[newPass]}</label>

        {/* если тип не равен done рендерим инпут */}
        {newPass !== "done" && (
          <>
            <input
              onChange={(e) => setPassVal(e.target.value)}
              name={"password"}
              value={passVal}
            />
            {/* рендерим ошибк уо пустом контенте, если она возникла */}

            {isError.empty && (
              <p style={{ color: "red" }}>Поле не может быть пустым!</p>
            )}
            {/* рендерим ошибку с паролями если она возникла */}
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
