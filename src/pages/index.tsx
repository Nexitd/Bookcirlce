import { Route, Routes } from "react-router-dom";
import { routes } from "./lib/routes";
import { createRoute } from "./lib/create-route";
import { lazy } from "react";
import AuthRoute from "./lib/auth-route";
import StreamRoute from "./lib/stream-route";

const Auth = lazy(() => import("pages/ui/auth"));
const Stream = lazy(() => import('pages/ui/stream'))

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<AuthRoute element={Auth} />} />
            <Route path="/stream" element={<StreamRoute element={Stream} />} />
            {routes.map(createRoute)}
        </Routes>
    );
};