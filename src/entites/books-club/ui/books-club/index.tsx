import { useCallback } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "shared/api"
import { Slider } from "shared/ui";
import { ClubCard } from "../club-card";

export const BooksClubItem = ({ title }: { title: string }) => {
    const { clubs } = useAppSelector(state => state.books_club);
    const navigate = useNavigate()

    const handleClick = useCallback((id: number) => {
        navigate(`/book-clubs/${id}`)
    }, [])

    return <div className="club__slider_item">
        <h2 className="club__subtitle">{title}</h2>
        <Slider slidesToShow={2}>
            {clubs.map(el => (
                <ClubCard data={el} key={el.id} onClick={handleClick} />
            ))}
        </Slider>
    </div>
}