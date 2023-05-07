import { BookCard, BookRow, BookTags } from "entites/books";
import { SearchBook } from "features/search";
import { useAppSelector } from "shared/api";
import { useCallback, useState } from "react";
import { BookCardType } from "shared/types";
import { useNavigate } from "react-router-dom";

const Books = () => {
  const { book_cards } = useAppSelector((state) => state.book);

  const [books, setBooks] = useState([] as BookCardType[]);

  const onSearch = (e: string) => {
    // Я ЕБЛАН СОРИ ЕБАТЬ
    // book_cards.map((el) => {
    //   if (
    //     e.trim() !== "" &&
    //     el.title.toLocaleLowerCase().includes(e.toLocaleLowerCase()) &&
    //     !books.includes(el.title)
    //   ) {
    //     setBooks((prev) => [el.title, ...prev]);
    //   } else {
    //     // setBooks([]);
    //     // return;
    //   }
    // });
    //   Сверху хуйня полная
    const testFoo = book_cards.filter((el) => {
      return (
        e.trim() !== "" &&
        el.title.toLocaleLowerCase().includes(e.toLocaleLowerCase())
        //   &&
        // !books.includes(el)
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
