import { useLocation, useParams } from "react-router-dom";
import { BookClubHero, ClubMeetings, ClubBooks, ClubDiscussions, ClubPols } from "entites/books-club";
import { useAppSelector } from "shared/api";
import { Breadcrumbs } from "shared/ui"

// страница конкретного клуба
const BooksClubPage = () => {
    // получение id из uri params
    const { id } = useParams();
    // получение название роута
    const { pathname } = useLocation();
    // получение массива с клубами
    const { fullBookClubInfo } = useAppSelector(state => state.books_club);

    // выборка нужного клуба по id 
    const currentClub = fullBookClubInfo.filter(el => el.id === Number(id))[0];
    // получение корректного роута для крошек
    const currPath = pathname.split("/").filter((el) => !!el)[0];


    return <div className="club wrapper__container">
        <Breadcrumbs
            data={[
                {
                    to: `/${currPath}`,
                    label: currPath === "my-clubs" ? "Мои клубы" : "Книжные клубы",
                },
                { to: "", label: currentClub.title },
            ]}
        />
        <BookClubHero data={currentClub} />
        <ClubBooks data={currentClub} />
        <ClubMeetings data={currentClub} />
        <ClubDiscussions data={currentClub} />
        <ClubPols data={currentClub} />
    </div>

};

export default BooksClubPage;
