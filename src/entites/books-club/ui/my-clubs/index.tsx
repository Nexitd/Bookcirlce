import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "shared/api";
import { Pagination } from "shared/ui"
import { ClubRow } from "../club-row";

const PageSize = 3

export const MyClubsItem = () => {
    const { myClubs } = useAppSelector(state => state.books_club)
    const [current, setCurrent] = useState<number>(1)
    const navigate = useNavigate()

    const handleClick = useCallback((id: number) => {
        navigate(`/club/${id}`)
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