import { memo, useCallback } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import cn from "classnames"
import person from 'assets/images/Ellipse 1.png'
import { RenderSidebarItemsRole } from "features/auth"
import { sidebarFooterItems } from "shared/constants"
import { Button, Collapse } from "shared/ui"
import { useAppDispatch, useAppSelector } from "shared/api"
import { logOut, setModalType } from "entites/auth/model"


const Sidebar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const { isAuth } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    const handleClick = useCallback((link: string) => {
        navigate(link)

        if (!link) dispatch(logOut())
    }, [navigate, dispatch])

    return <div className="sidebar">
        <div className="sidebar__header">
            <h3 className="sidebar__header_logo font-title">bookcircle</h3>
        </div>
        <div className="sidebar__body">
            <RenderSidebarItemsRole pathname={pathname} handleClick={handleClick} />
        </div>
        <div className="sidebar__footer">
            {isAuth ?
                <Collapse className="sidebar__collapse" img={person} isImage={true} title="Иван Иванов" arrow={<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.628 9.0858C6.82667 9.30701 7.17333 9.30701 7.372 9.08579L12.3131 3.58409C12.6022 3.26221 12.3737 2.75 11.9411 2.75H2.05892C1.62628 2.75 1.39784 3.26221 1.68692 3.58409L6.628 9.0858Z" fill="#222222" />
                </svg>
                }>
                    <ul className="sidebar__list">
                        {sidebarFooterItems.map(el => (
                            <li className={cn("sidebar__list_item font-text-noto", pathname === el.to && 'sidebar__link-active')} key={el.id} onClick={() => handleClick(el.to)}>
                                {el.icon}
                                <span>{el.title}</span>
                            </li>))}
                    </ul>
                </Collapse>
                : <>
                    <Button text="Войти" className="sidebar__footer_btn" onClick={() => dispatch(setModalType("auth"))} />
                    <Button text="Зарегестрироваться" className="sidebar__footer_btn" onClick={() => dispatch(setModalType('registration'))} />
                </>}
        </div>
    </div>
}

export default memo(Sidebar)