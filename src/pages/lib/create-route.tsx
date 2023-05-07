import { FC } from "react";
import { Navigate, Route } from "react-router-dom";
import { useAppSelector } from "shared/api";
import { ACCOUNT_TYPE } from "shared/types";

type TRoute = {
    element: React.ComponentType;
};

type CreateRouteType = {
    element: React.ComponentType,
    path: string,
    roles: "guest" | "member" | "moder";
}

// приватный роут. Роут который определяет может ли пользователь получить доступ к тому
// или иному контенту

const PrivateRoute: FC<TRoute & Pick<CreateRouteType, "roles">> = ({ element: RouteComponent, roles }) => {
    // флаг isAuth определяет авторизован юзер или нет, а currentUser - модель текущего пользователя и его данные
    const { isAuth, currentUser } = useAppSelector(state => state.auth);

    const redirect = () => {
        if (!isAuth) {
            // если пользователь не авторизован мы просто выбрасываем его на страницу авторизации
            return <Navigate to="/" />
        } else if (isAuth && roles.includes(ACCOUNT_TYPE[currentUser.role])) {
            // если он авторизован и пытается попасть на свою страницу, пропускаем его
            return <RouteComponent />
        } else {
            // если он авторизован, но пытается попасть не на свою страницу - возвращаем на страницу
            // с его клубами
            return <Navigate to="/my-clubs" />
        }
    }

    return redirect();
}

// создаем новые роуты

export const createRoute: FC<any> = ({ element, path, roles, ...route }: CreateRouteType) => {
    return (
        <Route
            path={path}
            key={path}
            element={<PrivateRoute element={element} roles={roles} />}
            {...route}
        />
    );
};