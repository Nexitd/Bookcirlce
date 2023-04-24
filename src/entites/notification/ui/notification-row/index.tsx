import { useCallback, useEffect, useMemo, useState } from "react";
import NotificationCard from "../notification-card"
import { NotificationModel } from "entites/notification";
import { useAppDispatch, useAppSelector } from "shared/api"
import { ACCOUNT_TYPE } from "shared/types";
import { Pagination } from "shared/ui";

const PageSize = 3

export const NotificationRow = () => {
    const { filtered_notifications } = useAppSelector(state => state.notification)
    const { currentUser } = useAppSelector(state => state.auth);

    const [currentPage, setCurrentPage] = useState<number>(1)

    const userRole: "guest" | 'member' | 'moder' = ACCOUNT_TYPE[currentUser.role]
    const dispatch = useAppDispatch()


    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;

        return filtered_notifications.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, filtered_notifications]);




    useEffect(() => {
        dispatch(NotificationModel.changeNotificationType("new"));
    }, [])

    const handleClick = useCallback((id: number) => {
        dispatch(NotificationModel.removeNotification(id))
    }, [])

    return <div className="notification__container">
        {currentTableData.length ? currentTableData.map(el => (
            <NotificationCard data={el} key={el.id} role={userRole} onClick={handleClick} />
        )) : <h2>No data</h2>}

        <div className="notification__container_pagination">
            <Pagination onPageChange={page => setCurrentPage(page)} totalCount={filtered_notifications.length} currentPage={currentPage} pageSize={PageSize} />
        </div>
    </div>
}
