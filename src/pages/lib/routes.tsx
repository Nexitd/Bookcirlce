import { lazy } from "react";

// список роутов во всем приложении

// id: id роута
// path: путь роута (url)
// element - компонент, который будет рендериться по этому пути
// roles - список ролей, которые имеют доступ к странице 

export const routes = [
    {
        id: 1,
        path: "/notification",
        element: lazy(() => import("pages/ui/notification")),
        roles: ['moder', 'member']
    },
    {
        id: 2,
        path: '/book-clubs',
        element: lazy(() => import('pages/ui/book-clubs')),
        roles: ['member']
    },
    {
        id: 3,
        path: '/my-clubs',
        element: lazy(() => import('pages/ui/my-clubs')),
        roles: ['moder', 'member']
    },
    {
        id: 4,
        path: '/create-club',
        element: lazy(() => import('pages/ui/create-club')),
        roles: ['moder']
    },
    {
        id: 5,
        path: '/calendar',
        element: lazy(() => import('pages/ui/calendar')),
        roles: ['moder', 'member']
    },
    {
        id: 6,
        path: '/settings',
        element: lazy(() => import('pages/ui/settings')),
        roles: ['moder', 'member']
    },
    {
        id: 8,
        path: '/book-clubs/:id',
        element: lazy(() => import('pages/ui/books-club-page')),
        roles: ['moder', 'member']
    },
    {
        id: 9,
        path: '/my-clubs/:id',
        element: lazy(() => import('pages/ui/books-club-page')),
        roles: ['moder', 'member']
    },
    {
        id: 10,
        path: "/books",
        element: lazy(() => import("pages/ui/books")),
        roles: ['moder', 'member'],
    },
    {
        id: 11,
        path: "/books/:id",
        element: lazy(() => import("pages/ui/books-page")),
        roles: ['moder', 'member'],
    },
    {
        id: 12,
        path: '/clubs/discussion/:id',
        element: lazy(() => import("pages/ui/discussion-page")),
        roles: ['moder', 'member']
    },
    {
        id: 13,
        path: '/edit-club',
        element: lazy(() => import('pages/ui/edit-club')),
        roles: ['moder']
    },
    {
        id: 14,
        path: '/club/add-book',
        element: lazy(() => import('pages/ui/create-book')),
        roles: ['moder']
    },
    {
        id: 14,
        path: '/club/add-discussion',
        element: lazy(() => import('pages/ui/create-discussion')),
        roles: ['moder']
    },
    {
        id: 15,
        path: '/edit-meet',
        element: lazy(() => import('pages/ui/edit-meet')),
        roles: ['moder']
    },
    {
        id: 16,
        path: '/club/add-meet',
        element: lazy(() => import('pages/ui/create-meet')),
        roles: ['moder']
    },
    {
        id: 17,
        path: '/club/add-pol',
        element: lazy(() => import('pages/ui/create-pol')),
        roles: ['moder']
    },
    {
        id: 18,
        path: '/club/edit-pol',
        element: lazy(() => import('pages/ui/edit-pol')),
        roles: ['moder']
    },
]