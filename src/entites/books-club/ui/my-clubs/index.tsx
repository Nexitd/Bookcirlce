import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "shared/api";
import { Pagination } from "shared/ui"
import { ClubRow } from "../club-row";

const PageSize = 3

export const MyClubsItem = () => {
    const { clubs } = useAppSelector(state => state.books_club)
    const { currentUser } = useAppSelector(state => state.auth)
    const [current, setCurrent] = useState<number>(1)
    const navigate = useNavigate()

    const myClubs = clubs.filter(el => {
        const usersClubs = el.members.filter(elem => elem.id === currentUser.id);

        if (usersClubs.length !== 0) return el;
    })

    const handleClick = useCallback((id: number) => {
        navigate(`/my-clubs/${id}`)
    }, [])

    const renderedData = useMemo(() => {
        const firstPageIndex = (current - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;

        return myClubs.slice(firstPageIndex, lastPageIndex);
    }, [current, myClubs]);

    return <>
        <div className="club__row">

            <ClubRow renderedData={renderedData} handleClick={handleClick} />
        </div>

        <div className="pagination__wrapper">
            <Pagination totalCount={myClubs.length} currentPage={current} onPageChange={(page) => setCurrent(page)} pageSize={PageSize} />
        </div>
    </>
}