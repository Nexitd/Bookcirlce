import { memo, useCallback, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "shared/api";
import { SlickSlider } from "widgets/slider";
import { BookCard } from "../book-card";

export const OtherBooks = memo(() => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { books } = useAppSelector(state => state.book);

    const otherBooks = useMemo(() => books.filter(el => el.id !== Number(id)), [id]);

    const handleClick = useCallback((id: number) => {
        navigate(`/books/${id}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [navigate])

    return <div className="book__row">
        <h2 className="book__row_title">Похожие книги</h2>

        <SlickSlider slidesToShow={3}>
            {otherBooks.map(el => (
                <BookCard data={el} key={el.id} onClick={handleClick} />
            ))}
        </SlickSlider>
    </div>
})