import { NotificationModel, NotificationRow } from "entites/notification";
import { FilterByTag } from "features/filter";
import { useAppDispatch } from "shared/api";

// фильтры для табов
const filters = [
    {
        id: 1,
        name: "old",
        title: "Старые"
    },
    {
        id: 2,
        name: 'new',
        title: "Новые"
    }
]

// страница с уведомлениями
const Notifications = () => {
    // диспетчер из редакса
    const dispatch = useAppDispatch();

    // изменение типа уведомления
    const handleClick = (type: string) => {
        dispatch(NotificationModel.changeNotificationType(type))
    }
    return (
        <div className="wrapper__container">
            <FilterByTag initialValue="new" values={filters} onClick={handleClick} />
            <NotificationRow />
        </div>
    )
}

export default Notifications;