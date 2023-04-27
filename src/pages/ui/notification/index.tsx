import { NotificationRow } from "entites/notification";
import { FilterByTag } from "features/notification";
import { Link } from "react-router-dom";

const Notifications = () => {
    return (
        <div className="wrapper__container">
            <Link to="/stream">strem</Link>
            <FilterByTag />
            <NotificationRow />
        </div>
    )
}

export default Notifications;