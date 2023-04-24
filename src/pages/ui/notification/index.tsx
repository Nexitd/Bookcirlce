import { NotificationRow } from "entites/notification";
import { FilterByTag } from "features/notification";

const Notifications = () => {
    return (
        <div className="wrapper__container">
            <FilterByTag />
            <NotificationRow />
        </div>
    )
}

export default Notifications;