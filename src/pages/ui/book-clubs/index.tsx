import { BooksCharacteristics, BooksClubItem } from "entites/books-club";
import { SearchBook } from "features/search";
import { useNavigate } from "react-router-dom";

const BookClubs = () => {
  const navigate = useNavigate();

  const onSearch = (e: string) => {
    navigate(`/search-result?title=${e}&type=clubs`);
  };

  return (
    <div className="wrapper__container">
      <div className="club">
        <SearchBook placeholder="Поиск книжных клубов" onSearch={onSearch} />
        <BooksCharacteristics title="Поиск по категориям" />
        <BooksClubItem title="Популярные клубы" />
        <BooksClubItem title="Новые клубы" />
      </div>
    </div>
  );
};

export default BookClubs;
