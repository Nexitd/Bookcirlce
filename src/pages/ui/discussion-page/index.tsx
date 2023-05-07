import { DiscussionCard, DiscussionMessageRow } from "entites/discussion";
import { MessageField } from "features/discussion";
import { useParams, useSearchParams } from "react-router-dom";
import { useAppSelector } from "shared/api";
import { Breadcrumbs } from "shared/ui";

// страница с обсуждением
const DiscussionPage = () => {
    // id обсуждения
    const { id } = useParams()
    // параметры из url
    const [searchParams] = useSearchParams();
    // модель с полной информацией о клубе
    const { fullBookClubInfo } = useAppSelector(state => state.books_club);

    // текущий клуб
    const currentClub = fullBookClubInfo.filter(el => el.id === Number(searchParams.get("club_id")))[0]
    // текущее обсуждение
    const currentDiscussion = currentClub.discussions.filter(el => el.id === Number(id))[0]

    return <div className="discussion wrapper__container">
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
                { to: "", label: 'Обсуждение' },
            ]}
        />
        <DiscussionCard data={currentDiscussion} isBtn={false} />
        <DiscussionMessageRow data={currentDiscussion.messages} />
        <MessageField clubId={Number(searchParams.get("club_id"))} discussionId={Number(id)} />
    </div>
}

export default DiscussionPage;