import { BookClubs, BookHero, OtherBooks } from "entites/books";
import { BookLayot } from "widgets/book";

// Страница конкретной книги
const BooksPage = () => {
    return <div className="book wrapper__container">
        <BookHero />
        <BookLayot />
        <BookClubs />
        <OtherBooks />
    </div>
}

export default BooksPage;