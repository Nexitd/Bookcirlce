import { changeUserPassword, deleteUser } from "entites/auth/model";
import { useAppDispatch, useAppSelector } from "shared/api";
import DeleteModal from "./delete-modal";
import ChangePasswordModal from "./change-password-modal";

type SettingsFormModalPropsType = {
  modalType: "password" | "delete";
  showModal: () => void | any;
};

export type ModalPropsType = {
  handleClick: (password?: string) => void;
  showModal: () => void;
};

export const SettingsFormModal = ({
  modalType,
  showModal,
}: SettingsFormModalPropsType) => {
  // текущий юзер
  const { currentUser } = useAppSelector((state) => state.auth);
  // диспетчер из редакса
  const dispatch = useAppDispatch();

  // если тип модалки удалить, рендерим это
  return modalType === "delete" ? (
    <DeleteModal
      showModal={showModal}
      // уделения юзера
      handleClick={() => dispatch(deleteUser(currentUser.id))}
    />
  ) : (
    // иначе это
    <ChangePasswordModal
      showModal={showModal}
      handleClick={(password) =>
        // изменение пароля
        dispatch(changeUserPassword({ password: password, id: currentUser.id }))
      }
    />
  );
};
