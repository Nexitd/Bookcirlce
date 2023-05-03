import { memo, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SlickSlider } from "widgets/slider";
import { DiscussionCard } from "entites/discussion";
import { ACCOUNT_TYPE, FullBookClubInfoType } from "shared/types";
import { useAppSelector } from "shared/api";
import { Button } from "shared/ui";

export const ClubDiscussions = memo(({ data }: { data: FullBookClubInfoType }) => {
    const navigate = useNavigate();
    const { id } = useParams()
    const { currentUser } = useAppSelector(state => state.auth);

    const handleClick = useCallback((disId: number) => navigate(`/clubs/discussion/${disId}?club_id=${id}`), [navigate]);

    return <div className="club__slider_item club__item_discussions">
        <div className="club__item_flex">
            <h2 className="club__subtitle">Обсуждения</h2>
            {ACCOUNT_TYPE[currentUser.role] === 'moder' && <Button onClick={() => navigate('/club/add-discussion')} text="Добавить обсуждение" />}
        </div>

        <div>
            <SlickSlider slidesToShow={1} isSlice={true}>
                {data.discussions.map(el => (
                    <DiscussionCard key={el.id} data={el} onClick={handleClick} />
                ))}
            </SlickSlider>
        </div>
    </div>
})