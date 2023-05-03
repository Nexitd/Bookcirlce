import { memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlickSlider } from "widgets/slider";
import { FilterByTag } from "features/filter";
import { BookCard } from "entites/books";
import { ACCOUNT_TYPE, BookCardType, FullBookClubInfoType } from "shared/types";
import { useAppSelector } from "shared/api";
import { Button } from "shared/ui";



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

const countSlides = (length: number) => {
    if (length <= 1) return 1;
    if (length <= 2 && length > 1) return 2;

    return 3;
}

export const ClubBooks = memo(({ data }: { data: FullBookClubInfoType }) => {
    const navigate = useNavigate();
    const { currentUser } = useAppSelector(state => state.auth)
    const [filteredData, setFilteredData] = useState<BookCardType[]>([]);
    const handleClick = useCallback((id: number) => navigate(`/books/${id}`), [navigate])

    const filterData = (type: string) => {
        const currData = data.books.filter(el => el.book_filter === type);

        setFilteredData([...currData]);
    }

    useEffect(() => {
        filterData("old");
    }, []);


    return <div className="club__slider_item club__item_books">
        <h2 className="club__subtitle">Книги</h2>

        <div className="club__item_flex">
            <FilterByTag initialValue="old" values={filters} onClick={filterData} />
            {ACCOUNT_TYPE[currentUser.role] === "moder" && <Button onClick={() => navigate("/club/add-book")} text="Добавить книгу" />}
        </div>

        <SlickSlider slidesToShow={countSlides(filteredData.length)}>
            {filteredData.map((el: any) => (
                <BookCard key={el.id} data={el} onClick={handleClick} />
            ))}
        </SlickSlider>
    </div>
})