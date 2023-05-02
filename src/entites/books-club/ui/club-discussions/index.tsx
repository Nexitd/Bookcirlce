import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { SlickSlider } from "widgets/slider";
import { DiscussionCard } from "entites/discussion";
import { FullBookClubInfoType } from "shared/types";

export const ClubDiscussions = memo(({ data }: { data: FullBookClubInfoType }) => {
    const navigate = useNavigate()

    const handleClick = useCallback((id: number) => navigate(`/discussion/${id}`), [navigate]);

    return <div className="club__slider_item club__item_discussions">
        <h2 className="club__subtitle">Обсуждения</h2>

        <div>
            <SlickSlider slidesToShow={1} isSlice={true}>
                {data.discussions.map(el => (
                    <DiscussionCard key={el.id} data={el} onClick={handleClick} />
                ))}
            </SlickSlider>
        </div>
    </div>
})