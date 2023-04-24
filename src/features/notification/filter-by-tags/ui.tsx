import { NotificationModel } from "entites/notification";
import { useState } from "react";
import { useAppDispatch } from "shared/api"
import cn from 'classnames';

export const FilterByTag = () => {
    const dispatch = useAppDispatch();
    const [selected, setSelected] = useState<"new" | "old">("new")

    const handleClick = (type: "new" | "old") => {
        dispatch(NotificationModel.changeNotificationType(type));
        setSelected(type)
    }

    return (
        <div className="notification__tags">
            <div className={cn("notification__tags_item", selected === "old" && 'active')} onClick={() => handleClick("old")}>
                <span>Просмотреные</span>
            </div>
            <div className={cn("notification__tags_item", selected === "new" && 'active')} onClick={() => handleClick("new")}>
                <span>Новые</span>
            </div>
        </div >
    )
}

