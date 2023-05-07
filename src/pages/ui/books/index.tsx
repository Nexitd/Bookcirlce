import { BookRow, BookTags } from "entites/books";
import { SearchBook } from "features/search";
import { useAppSelector } from "shared/api";
import { useState } from "react";
import { BookCardType } from "shared/types";

// страница с Книгами
const Books = () => {
    const { book_cards } = useAppSelector((state) => state.book);

    const [books, setBooks] = useState([] as BookCardType[]);

    const onSearch = (e: string) => {

        const testFoo = book_cards.filter((el) => {
            return (
                e.trim() !== "" &&
                el.title.toLocaleLowerCase().includes(e.toLocaleLowerCase())

            );
        });
        setBooks(testFoo);
    };

    return (
        <div className="book wrapper__container">
            <SearchBook placeholder="Поиск книг" onSearch={onSearch} data={books} />
            <BookTags title="Поиск по категориям" type="category" />
            <BookTags title="Поиск по жанрам" type="genre" />
            <BookRow title="Популярные книги" />
            <BookRow title="новинки" />
        </div>
    );
};

export default Books;
