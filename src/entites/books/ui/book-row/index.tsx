import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "shared/api";
import { SlickSlider } from "widgets/slider";
import { BookCard } from "../book-card";

export const BookRow = memo(({ title }: { title: string }) => {
    // берем данные для карточек
    const { book_cards } = useAppSelector(state => state.book)
    // функция для редиректов
    const navigate = useNavigate()


    // при вызове пееремещаем пользователя на страницу книги
    const handleClick = useCallback((id: number) => {
        navigate(`/books/${id}`)
    }, [navigate])

    return <div className="book__row">
        <h2 className="book__row_title">{title}</h2>

        <SlickSlider slidesToShow={3}>
            {book_cards.map(el => (
                <BookCard data={el} key={el.id} onClick={() => handleClick(el.id)} />
            ))}
        </SlickSlider>
    </div>
})