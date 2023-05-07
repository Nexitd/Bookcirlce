import { useCallback, useEffect, useMemo, useState } from "react";
import { NotificationCard } from "../notification-card"
import { NotificationModel } from "entites/notification";
import { useAppDispatch, useAppSelector } from "shared/api"
import { ACCOUNT_TYPE } from "shared/types";
import { Pagination } from "shared/ui";

// количество элементов на странице
const PageSize = 3

export const NotificationRow = () => {
    // отфильтрованные уведомления
    const { filtered_notifications } = useAppSelector(state => state.notification)
    // текущий юзер
    const { currentUser } = useAppSelector(state => state.auth);

    // текущая страница
    const [currentPage, setCurrentPage] = useState<number>(1)

    //  роль текущего пользоваетля
    const userRole: "guest" | 'member' | 'moder' = ACCOUNT_TYPE[currentUser.role]
    // диспетчер из редакса
    const dispatch = useAppDispatch()


    // дата для рендера
    const currentTableData = useMemo(() => {
        // первый индекс, (текущая страница - 1) * количество элеменетов на странице
        const firstPageIndex = (currentPage - 1) * PageSize;
        // индекс последней страницы: индекс первой + количество элементов
        const lastPageIndex = firstPageIndex + PageSize;

        // слайс по индексам
        return filtered_notifications.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, filtered_notifications]);




    useEffect(() => {
        // изменение типа уведомлений
        dispatch(NotificationModel.changeNotificationType("new"));
    }, [])

    const handleClick = useCallback((id: number) => {
        // удаление уведомления
        dispatch(NotificationModel.removeNotification(id))
    }, [])

    return <div className="notification__container">
        {currentTableData.length ? currentTableData.map(el => (
            <NotificationCard data={el} key={el.id} role={userRole} onClick={handleClick} />
        )) : <h2>No data</h2>}

        <div className="notification__container_pagination">
            {/* пагинация.  onPageChange - функция изменения страницы, totalCount - общее число элементов на странице
            currentPage - текущая страница, pageSize - количество элементов на странице*/}
            <Pagination onPageChange={page => setCurrentPage(page)} totalCount={filtered_notifications.length} currentPage={currentPage} pageSize={PageSize} />
        </div>
    </div>
}
