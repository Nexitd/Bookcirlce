import { Route, Routes } from "react-router-dom";
import { routes } from "./lib/routes";
import { createRoute } from "./lib/create-route";
import { lazy } from "react";
import AuthRoute from "./lib/auth-route";

const Auth = lazy(() => import("pages/ui/auth"))

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<AuthRoute element={Auth} />} />
            {routes.map(createRoute)}
        </Routes>
    );
};