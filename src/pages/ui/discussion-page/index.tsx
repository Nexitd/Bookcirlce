import { DiscussionCard, DiscussionMessageRow } from "entites/discussion";
import { MessageField } from "features/discussion";
import { useParams, useSearchParams } from "react-router-dom";
import { useAppSelector } from "shared/api";

const DiscussionPage = () => {
    const { id } = useParams()
    const [searchParams] = useSearchParams();
    const { fullBookClubInfo } = useAppSelector(state => state.books_club);

    const currentClub = fullBookClubInfo.filter(el => el.id === Number(searchParams.get("club_id")))[0]
    const currentDiscussion = currentClub.discussions.filter(el => el.id === Number(id))[0]

    return <div className="discussion wrapper__container">
        <DiscussionCard data={currentDiscussion} isBtn={false} />
        <DiscussionMessageRow data={currentDiscussion.messages} />
        <MessageField clubId={Number(searchParams.get("club_id"))} discussionId={Number(id)} />
    </div>
}

export default DiscussionPage;