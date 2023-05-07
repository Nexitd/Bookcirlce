import { memo, useCallback, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "shared/api";
import { SlickSlider } from "widgets/slider";
import { BookCard } from "../book-card";

export const OtherBooks = memo(() => {
    // id текщей книги
    const { id } = useParams()
    // функция для редиректов
    const navigate = useNavigate()
    // берем данные с книгами
    const { books } = useAppSelector(state => state.book);

    // берем все книги, кроме выбранной
    const otherBooks = useMemo(() => books.filter(el => el.id !== Number(id)), [id]);

    // перемещаем на страницу книги другой и скролим наверх страницы
    const handleClick = useCallback((id: number) => {
        navigate(`/books/${id}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [navigate])

    return <div className="book__row">
        <h2 className="book__row_title">Похожие книги</h2>

{/* рендер слайдера и карточек внутри */}
        <SlickSlider slidesToShow={3}>
            {otherBooks.map(el => (
                <BookCard data={el} key={el.id} onClick={handleClick} />
            ))}
        </SlickSlider>
    </div>
})