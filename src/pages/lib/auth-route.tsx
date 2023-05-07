import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "shared/api";

type TPrivateRoute = {
    element: React.ComponentType;
};


const AuthRoute: FC<TPrivateRoute> = ({ element: RouteComponent }) => {
    // роут с авторизацией - isAuth флаг, который говорит авторизован юзер или нет
    const { isAuth } = useAppSelector(state => state.auth);

    // если он не авторизован, мы отправляем его страницу с авторизацией
    // в противном случае на страницу с его клубами
    return !isAuth ? <RouteComponent /> : <Navigate to="/my-clubs" />;
};

export default AuthRoute;