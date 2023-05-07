import { CreateBookForm } from "entites/create-book";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "shared/api";
import { Breadcrumbs } from "shared/ui";

// страница создание книги
const CreateBook = () => {
    // получение параметров поиска, которые задаются через знак ?
    const [searchParams] = useSearchParams();
    // получение массива с клубами (полная информация)
    const { fullBookClubInfo } = useAppSelector(state => state.books_club)
    // фильтрация массива и получение конкретного клуба
    const currentClub = fullBookClubInfo.filter(el => el.id === Number(searchParams.get("club_id")))[0]

    return <div className="wrapper__container edit__book">
        <Breadcrumbs
            data={[
                {
                    to: `/my-clubs`,
                    label: "Мои клубы",
                },
                {
                    to: `/my-clubs/${searchParams.get('club_id')}`,
                    label: currentClub.title
                },
                { to: "", label: 'Добавить книгу' },
            ]}
        />

        <h1 className="edit__book_title">добавить книгу</h1>

        <CreateBookForm />
    </div>
}

export default CreateBook;