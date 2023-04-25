import { FC } from "react";
import { Link, Navigate, Route } from "react-router-dom";
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

const PrivateRoute: FC<TRoute & Pick<CreateRouteType, "roles">> = ({ element: RouteComponent, roles }) => {
    const { isAuth, currentUser } = useAppSelector(state => state.auth);

    const redirect = () => {
        if (!isAuth) {
            return <Navigate to="/" />
        } else if (isAuth && roles.includes(ACCOUNT_TYPE[currentUser.role])) {
            return <RouteComponent />
        } else {
            return <Navigate to="/notification" />
        }
    }

    return redirect();
}

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