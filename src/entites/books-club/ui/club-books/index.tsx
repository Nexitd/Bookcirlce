import { memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BooksClubsModel } from "entites/books-club";
import { SlickSlider } from "widgets/slider";
import { FilterByTag } from "features/filter";
import { BookCard } from "entites/books";
import { BookCardType, FullBookClubInfoType } from "shared/types";
import { useAppDispatch } from "shared/api";

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

export const ClubBooks = memo(({ data }: { data: FullBookClubInfoType }) => {
    const navigate = useNavigate();
    const [filteredData, setFilteredData] = useState<BookCardType[]>([]);
    const handleClick = useCallback((id: number) => navigate(`/book/${id}`), [navigate])

    const filterData = (type: string) => {
        const currData = data.books.filter(el => el.book_filter === type);

        setFilteredData([...currData]);
    }

    useEffect(() => {
        filterData("old");
    }, [])


    return <div className="club__slider_item club__item_books">
        <h2 className="club__subtitle">Книги</h2>

        <FilterByTag initialValue="old" values={filters} onClick={filterData} />

        <SlickSlider slidesToShow={3}>
            {filteredData.map((el: any) => (
                <BookCard key={el.id} data={el} onClick={handleClick} />
            ))}
        </SlickSlider>
    </div>
})