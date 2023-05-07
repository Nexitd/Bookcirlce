import { BooksCharacteristics, BooksClubItem } from "entites/books-club";
import { SearchBook } from "features/search";

//  страница Клубы
const BookClubs = () => {
  return (
    <div className="wrapper__container">
      <div className="club">
        <SearchBook
          placeholder="Поиск книжных клубов"
          onSearch={() => {}}
          data={[]}
        />
        <BooksCharacteristics title="Поиск по категориям" />
        <BooksClubItem title="Популярные клубы" />
        <BooksClubItem title="Новые клубы" />
      </div>
    </div>
  );
};

export default BookClubs;
