import { ClubCard } from "entites/books-club";
import { memo, useCallback, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "shared/api"
import { SlickSlider } from "widgets/slider";

export const BookClubs = memo(() => {
    const { id } = useParams()
    const { clubs } = useAppSelector(state => state.books_club);
    const navigate = useNavigate()

    const validClubs = useMemo(() => {
        const data = clubs.filter(club => {
            const clubsWithCurrentBook = club.books.filter(book => book.id === Number(id));

            if (clubsWithCurrentBook.length !== 0) return club
        })

        return data;
    }, [id])

    const handleClick = useCallback((id: number) => navigate(`/book-clubs/${id}`), [navigate])

    return <div className="club__slider_item">
        <h2 className="club__subtitle">обсуждают эту книгу</h2>

        {validClubs.length !== 0 ?
            <SlickSlider slidesToShow={2}>
                {validClubs.map((el) => (
                    <ClubCard data={el} key={el.id} onClick={handleClick} />
                ))}
            </SlickSlider>
            : <h1>No data</h1>}
    </div>
})