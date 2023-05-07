import { useSearchParams } from "react-router-dom";
import { ActionMeetForm } from "entites/create-meet";
import { useAppSelector } from "shared/api";
import { Breadcrumbs } from "shared/ui";

// страница Редактирование встречи
const CreateMeet = () => {
    // получение параметров поиска, которые задаются через знак ?
    const [searchParams] = useSearchParams();
    // получение массива с клубами (полная информация)
    const { fullBookClubInfo } = useAppSelector(state => state.books_club)
    // фильтрация массива и получение конкретного клуба
    const currentClub = fullBookClubInfo.filter(el => el.id === Number(searchParams.get("club_id")))[0]

    return <div className="wrapper__container create__meet">
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
                { to: "", label: 'редактировать встречу' },
            ]}
        />

        <h1 className="edit__book_title">редактировать встречу</h1>

        <ActionMeetForm />
    </div>
}

export default CreateMeet