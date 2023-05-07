import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "shared/api";
import { Pagination } from "shared/ui"
import { ClubRow } from "../club-row";

// количество отображаемых элементов в контейнере
const PageSize = 3

export const MyClubsItem = () => {
    // данные для клубов
    const { clubs } = useAppSelector(state => state.books_club)
    // текущий юзер
    const { currentUser } = useAppSelector(state => state.auth)
    // текущая страница и функция изменения этой самой текущей страницы
    const [current, setCurrent] = useState<number>(1)
    // функция редиректа
    const navigate = useNavigate()


    // берем только те клубы, в которых находится текущий юзер
    const myClubs = clubs.filter(el => {
        const usersClubs = el.members.filter(elem => elem.id === currentUser.id);

        if (usersClubs.length !== 0) return el;
    })
    

    // переход на страницу клуба
    const handleClick = useCallback((id: number) => {
        navigate(`/my-clubs/${id}`)
    }, [])

    // дата для рендера
    const renderedData = useMemo(() => {
        // берем первый инедкс (текущая страница -1) * количество элеменетов на странице
        const firstPageIndex = (current - 1) * PageSize;
        // первый индекс + количество элементов
        const lastPageIndex = firstPageIndex + PageSize;

        // возвращаем слайс по этим двум индексам
        return myClubs.slice(firstPageIndex, lastPageIndex);
    }, [current, myClubs]);

    return <>
        <div className="club__row">

            <ClubRow renderedData={renderedData} handleClick={handleClick} />
        </div>

        <div className="pagination__wrapper">
            {/* пагинация. totalCount - общее количество элементов
            currentPage - текущая страницу
            onPageChange - функция изменения страницы
            pageSize - количество элементов на странице */}
            <Pagination totalCount={myClubs.length} currentPage={current} onPageChange={(page) => setCurrent(page)} pageSize={PageSize} />
        </div>
    </>
}