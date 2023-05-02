import { NotificationModel, NotificationRow } from "entites/notification";
import { FilterByTag } from "features/filter";
import { useAppDispatch } from "shared/api";

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

const Notifications = () => {
    const dispatch = useAppDispatch();

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