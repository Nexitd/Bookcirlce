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
  const { currentUser } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return modalType === "delete" ? (
    <DeleteModal
      showModal={showModal}
      handleClick={() => dispatch(deleteUser(currentUser.id))}
    />
  ) : (
    <ChangePasswordModal
      showModal={showModal}
      handleClick={(password) =>
        dispatch(changeUserPassword({ password: password, id: currentUser.id }))
      }
    />
  );
};
