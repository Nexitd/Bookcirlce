import { memo, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SlickSlider } from "widgets/slider";
import { FilterByTag } from "features/filter";
import { BookCard } from "entites/books";
import { ACCOUNT_TYPE, BookCardType, FullBookClubInfoType } from "shared/types";
import { useAppSelector } from "shared/api";
import { Button } from "shared/ui";

// фильтры для табов

const filters = [
    {
        id: 1,
        name: "old",
        title: "Читали ранее"
    },
    {
        id: 2,
        name: "present",
        title: "Читаем сейчас"
    },
    {
        id: 3,
        name: "future",
        title: "Планируем читать"
    },
]

// высчитываем количество слайдов для отображения

const countSlides = (length: number) => {
    if (length <= 1) return 1;
    if (length <= 2 && length > 1) return 2;

    return 3;
}

export const ClubBooks = memo(({ data }: { data: FullBookClubInfoType }) => {
    // текущий id клуба
    const { id } = useParams()
    // функция редиректа
    const navigate = useNavigate();
    // текущий пользователь (данныее)
    const { currentUser } = useAppSelector(state => state.auth)
    // стейт для фильтрованной даты
    const [filteredData, setFilteredData] = useState<BookCardType[]>([]);
    // переход на страницу конкретной книги
    const handleClick = useCallback((id: number) => navigate(`/books/${id}`), [navigate])

    // фильтруем книги по типу (читаем сейчас и тд)
    const filterData = (type: string) => {
        const currData = data.books.filter(el => el.book_filter === type);

        setFilteredData([...currData]);
    }

    // первоначальное отображение данных с фильтром
    useEffect(() => {
        filterData("old");
    }, []);


    return <div className="club__slider_item club__item_books">
        <h2 className="club__subtitle">Книги</h2>

        <div className="club__item_flex">
            <FilterByTag initialValue="old" values={filters} onClick={filterData} />
           {/* кнопка только у модера */}
            {ACCOUNT_TYPE[currentUser.role] === "moder" && <Button onClick={() => navigate(`/club/add-book?club_id=${id}`)} text="Добавить книгу" />}
        </div>
{/* рендер слайдера */}
        <SlickSlider slidesToShow={countSlides(filteredData.length)}>
            {filteredData.map((el: any) => (
                <BookCard key={el.id} data={el} onClick={handleClick} />
            ))}
        </SlickSlider>
    </div>
})