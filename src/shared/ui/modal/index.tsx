import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { createPortal } from "react-dom";

interface IModal {
    children: ReactNode;
    onClick: () => void | Dispatch<SetStateAction<boolean>>;
    title: string;
    isOpen: boolean;
}

const Modal: FC<IModal> = ({ children, onClick = () => { }, title = '', isOpen = false }) => {
    return (
        <>
            {isOpen ? createPortal(
                <div className="modal__container">
                    <div className="modal">
                        <div className="modal__head">
                            <p className="modal__title">{title}</p>
                            <button className="modal__btn" onClick={onClick}>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.96967 7.46967C7.26256 7.17678 7.73744 7.17678 8.03033 7.46967L12 11.4393L15.9697 7.46967C16.2626 7.17678 16.7374 7.17678 17.0303 7.46967C17.3232 7.76256 17.3232 8.23744 17.0303 8.53033L13.0607 12.5L17.0303 16.4697C17.3232 16.7626 17.3232 17.2374 17.0303 17.5303C16.7374 17.8232 16.2626 17.8232 15.9697 17.5303L12 13.5607L8.03033 17.5303C7.73744 17.8232 7.26256 17.8232 6.96967 17.5303C6.67678 17.2374 6.67678 16.7626 6.96967 16.4697L10.9393 12.5L6.96967 8.53033C6.67678 8.23744 6.67678 7.76256 6.96967 7.46967Z" fill="#222222" />
                                </svg>
                            </button>
                        </div>
                        {children}
                    </div>
                </div>, document.getElementById("modal") as HTMLElement
            ) : null}
        </>
    )
}

export default Modal;