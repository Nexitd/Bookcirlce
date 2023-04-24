import { BooksCharacteristics, BooksClubItem } from "entites/books-club/ui"
import { SearchBook } from "features/my-clubs"


const BookClubs = () => {
    return <div className="wrapper__container">
        <div className="club">
            <SearchBook onSearch={() => { }} />
            <BooksCharacteristics title="Поиск по категориям" />
            <BooksClubItem title="Популярные клубы" />
            <BooksClubItem title="новые клубы" />
        </div>
    </div>
}

export default BookClubs