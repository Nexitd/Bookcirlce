import { memo, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "shared/api";
import { ColorableTag } from "shared/ui";

export const BookHero = memo(() => {
    const { books } = useAppSelector(state => state.book)
    const { id } = useParams()

    // берем конкретную книгу
    const currentBook = useMemo(() => books.filter(el => el.id === Number(id))[0], [id])

    return <div className="book__hero">
        <div className="book__hero_item">
            <img src={currentBook.image} alt="book image" />
        </div>
        <div className="book__hero_item">
            <h2 className="book__hero_title">{currentBook.title}</h2>

            <ColorableTag className="book__hero_tag" text={`Автор: ${currentBook.author}`} />

            <div className="book__hero_tags">
                {currentBook.book_tags.map((el, index) => (
                    <ColorableTag className="book__hero_tag" key={index} text={el} />
                ))}
            </div>

            <ColorableTag className="book__hero_tag" icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1.78312C7.01509 0.936527 5.58683 0.809035 4.28732 0.94011C2.77322 1.09283 1.24459 1.61241 0.293099 2.0449C0.114601 2.12604 0 2.30401 0 2.50009V13.5001C0 13.6701 0.0863761 13.8284 0.229307 13.9205C0.372238 14.0125 0.55214 14.0256 0.706901 13.9553C1.58875 13.5544 3.01012 13.074 4.38768 12.9351C5.79565 12.793 6.97747 13.0223 7.60957 13.8124C7.70445 13.931 7.84811 14.0001 8 14.0001C8.15189 14.0001 8.29555 13.931 8.39043 13.8124C9.02253 13.0223 10.2043 12.793 11.6123 12.9351C12.9899 13.074 14.4113 13.5544 15.2931 13.9553C15.4479 14.0256 15.6278 14.0125 15.7707 13.9205C15.9136 13.8284 16 13.6701 16 13.5001V2.50009C16 2.30401 15.8854 2.12604 15.7069 2.0449C14.7554 1.61241 13.2268 1.09283 11.7127 0.94011C10.4132 0.809035 8.98491 0.936527 8 1.78312Z" fill="#222222" />
            </svg>
            }
                text={currentBook.book_number} />

            <ColorableTag className="book__hero_tag" icon={<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.61273 15.4427C3.22629 15.6413 2.78872 15.2942 2.86652 14.8508L3.69625 10.1213L0.173916 6.76462C-0.155264 6.45092 0.0151358 5.87737 0.456125 5.81472L5.3546 5.11885L7.53872 0.792305C7.73547 0.402565 8.26844 0.402565 8.46519 0.792305L10.6493 5.11885L15.5478 5.81472C15.9888 5.87737 16.1592 6.45092 15.83 6.76462L12.3077 10.1213L13.1374 14.8508C13.2152 15.2942 12.7776 15.6413 12.3912 15.4427L8.00195 13.1868L3.61273 15.4427Z" fill="#222222" />
            </svg>
            } text={currentBook.rate.toFixed()} />

            <div className="book__hero_rate">
                {[0, 1, 2, 3, 4].map(el => (
                    <button key={el}>
                        <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.37497 27.8452C5.2291 28.6767 6.04953 29.3275 6.77411 28.9551L15.0039 24.7252L23.2337 28.9551C23.9583 29.3275 24.7787 28.6767 24.6328 27.8452L23.0771 18.9774L29.6815 12.6837C30.2987 12.0955 29.9792 11.0201 29.1523 10.9026L19.9677 9.59784L15.8725 1.48557C15.5036 0.754809 14.5042 0.754809 14.1353 1.48557L10.0401 9.59784L0.855479 10.9026C0.0286238 11.0201 -0.290877 12.0955 0.326337 12.6837L6.93071 18.9774L5.37497 27.8452ZM14.5711 22.6549L7.66032 26.2069L8.96205 18.7869C9.02341 18.4372 8.90803 18.079 8.65689 17.8397L3.20657 12.6458L10.8046 11.5664C11.1187 11.5218 11.393 11.3211 11.5412 11.0276L15.0039 4.16827L18.4666 11.0276C18.6148 11.3211 18.8891 11.5218 19.2032 11.5664L26.8012 12.6458L21.3509 17.8397C21.0998 18.079 20.9844 18.4372 21.0458 18.7869L22.3475 26.2069L15.4367 22.6549C15.1637 22.5146 14.8441 22.5146 14.5711 22.6549Z" fill="#96999C" />
                        </svg>
                    </button>
                ))}

                <span>Моя оценка</span>
            </div>

            <p className="book__hero_text">{currentBook.description}</p>
        </div>
    </div>
})