import { useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BookClubHero, ClubMeetings, ClubBooks, ClubDiscussions, ClubPols } from "entites/books-club";
import { useAppSelector } from "shared/api";
import { Breadcrumbs } from "shared/ui"

const BooksClubPage = () => {
    const { id } = useParams()
    const { pathname } = useLocation()
    const { fullBookClubInfo } = useAppSelector(state => state.books_club);

    const currentClub = useMemo(() => fullBookClubInfo.filter(el => el.id === Number(id))[0], [id]);

    return <div className="club wrapper__container">
        <Breadcrumbs path={pathname} />
        <BookClubHero data={currentClub} />
        <ClubBooks data={currentClub} />
        <ClubMeetings data={currentClub} />
        <ClubDiscussions data={currentClub} />
        <ClubPols data={currentClub} />
    </div>
}

export default BooksClubPage;