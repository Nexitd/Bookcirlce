import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

// оборачиваем приложение в роутер

export const withRouter = (component: () => React.ReactNode) => () =>
(
    <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>{component()}</Suspense>
    </BrowserRouter>
);