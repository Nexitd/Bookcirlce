import { BookClubs, BookHero, OtherBooks } from "entites/books";
import { BookLayot } from "widgets/book";

const BooksPage = () => {
    return <div className="book wrapper__container">
        <BookHero />
        <BookLayot />
        <BookClubs />
        <OtherBooks />
    </div>
}

export default BooksPage;