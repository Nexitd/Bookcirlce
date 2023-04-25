import { lazy } from "react";

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
        id: 7,
        path: '/stream',
        element: lazy(() => import('pages/ui/stream')),
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
]