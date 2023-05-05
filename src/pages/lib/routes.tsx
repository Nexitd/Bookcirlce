import { lazy } from "react";

export const routes = [
  {
    id: 1,
    path: "/notification",
    element: lazy(() => import("pages/ui/notification")),
    roles: ["moder", "member"],
  },
  {
    id: 2,
    path: "/book-clubs",
    element: lazy(() => import("pages/ui/book-clubs")),
    roles: ["member"],
  },
  {
    id: 3,
    path: "/my-clubs",
    element: lazy(() => import("pages/ui/my-clubs")),
    roles: ["moder", "member"],
  },
  {
    id: 4,
    path: "/create-club",
    element: lazy(() => import("pages/ui/create-club")),
    roles: ["moder"],
  },
  {
    id: 5,
    path: "/calendar",
    element: lazy(() => import("pages/ui/calendar")),
    roles: ["moder", "member"],
  },
  {
    id: 6,
    path: "/settings",
    element: lazy(() => import("pages/ui/settings")),
    roles: ["moder", "member"],
  },
  {
    id: 8,
    path: "/book-clubs/:id",
    element: lazy(() => import("pages/ui/books-club-page")),
    roles: ["moder", "member"],
  },
  {
    id: 9,
    path: "/my-clubs/:id",
    element: lazy(() => import("pages/ui/books-club-page")),
    roles: ["moder", "member"],
  },
  {
    id: 10,
    path: "/books",
    element: lazy(() => import("pages/ui/books")),
    roles: ["moder", "member"],
  },
  {
    id: 11,
    path: "/books/:id",
    element: lazy(() => import("pages/ui/books-page")),
    roles: ["moder", "member"],
  },
  {
    id: 12,
    path: "/clubs/discussion/:id",
    element: lazy(() => import("pages/ui/discussion-page")),
    roles: ["moder", "member"],
  },
  {
    id: 13,
    path: "/search-result",
    element: lazy(() => import("pages/ui/search-result")),
    roles: ["moder", "member"],
  },
];
