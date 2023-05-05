import { BookRow, BookTags } from "entites/books";
import { SearchBook } from "features/search";
import { useNavigate } from "react-router-dom";

const Books = () => {
  const navigate = useNavigate();

  const onSearch = (e: string) => {
    navigate(`/search-result?title=${e}&type=books`);
  };

  return (
    <div className="book wrapper__container">
      <SearchBook placeholder="Поиск книг" onSearch={onSearch} />
      <BookTags title="Поиск по категориям" type="category" />
      <BookTags title="Поиск по жанрам" type="genre" />
      <BookRow title="Популярные книги" />
      <BookRow title="новинки" />
    </div>
  );
};

export default Books;
