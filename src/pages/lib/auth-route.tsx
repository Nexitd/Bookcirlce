import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "shared/api";

type TPrivateRoute = {
    element: React.ComponentType;
};


const AuthRoute: FC<TPrivateRoute> = ({ element: RouteComponent }) => {
    const { isAuth } = useAppSelector(state => state.auth);

    return !isAuth ? <RouteComponent /> : <Navigate to="/notification" />;
};

export default AuthRoute;