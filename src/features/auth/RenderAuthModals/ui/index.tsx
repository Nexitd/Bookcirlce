import { useCallback } from "react";
import { useAppSelector } from "shared/api";
import { Login } from "./login";
import { RememberPassword } from "./remember-password";
import { Registration } from "./registration";


export const RenderAuthModals = () => {
    // тип выбранной модалки
    const { choosedModel } = useAppSelector(state => state.auth)

    // рендерим компонент в зависимости от типа
    const renderModals = useCallback(() => {
        switch (choosedModel) {
            case "auth":
                return <Login />
            case "remember":
                return <RememberPassword />
            case "registration":
                return <Registration />
            default:
                return <Login />
        }
    }, [choosedModel])

    return <>
        {renderModals()}
    </>
}

