import { useAppSelector } from "shared/api";
import { sidebarItemsGuest, validSidebarItemsField } from "shared/constants";
import cn from "classnames"

export const RenderSidebarItemsRole = ({ pathname, handleClick }: { pathname: string, handleClick: (link: string) => void }) => {
    const { isAuth, currentUser } = useAppSelector(state => state.auth);
    let sidebarItems = []

    if (!isAuth) {
        sidebarItems = sidebarItemsGuest
    } else {
        sidebarItems = validSidebarItemsField[currentUser.role]
    }

    return <ul className="sidebar__list">
        {sidebarItems.map(el => (
            <li className={cn("sidebar__list_item font-text-noto", pathname === el.to && 'sidebar__link-active')} key={el.id} onClick={() => handleClick(el.to)}>
                {el.icon}
                <span>{el.title}</span>
            </li>
        ))}
    </ul>
}
