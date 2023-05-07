import { useAppSelector } from "shared/api";
import { sidebarItemsGuest, validSidebarItemsField } from "shared/constants";
import cn from "classnames"

export const RenderSidebarItemsRole = ({ pathname, handleClick }: { pathname: string, handleClick: (link: string) => void }) => {
    // флаг isAuth (авторизован пользователь или нет), текущий юзер
    const { isAuth, currentUser } = useAppSelector(state => state.auth);
    let sidebarItems = []

    if (!isAuth) {
        // если юзер не авторизован этот набор полей
        sidebarItems = sidebarItemsGuest
    } else {
        // иначе этот
        sidebarItems = validSidebarItemsField[currentUser.role]
    }

    return <ul className="sidebar__list">
        {/* рендер */}
        {sidebarItems.map(el => (
            <li className={cn("sidebar__list_item font-text-noto", pathname.includes(el.to) && 'sidebar__link-active')} key={el.id} onClick={() => handleClick(el.to)}>
                {el.icon}
                <span>{el.title}</span>
            </li>
        ))}
    </ul>
}
