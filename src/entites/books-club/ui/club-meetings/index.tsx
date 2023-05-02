import { memo, useCallback, useEffect, useState } from "react";
import { SlickSlider } from "widgets/slider";
import { FilterByTag } from "features/filter";
import { MeetCard, MeetModel } from "entites/meets";
import { useAppDispatch, useAppSelector } from "shared/api";
import { FullBookClubInfoType, MeetType } from 'shared/types';

const filters = [
    {
        id: 1,
        name: 'old',
        title: "Прошедшие",
    },
    {
        id: 2,
        name: "future",
        title: "Запланированные"
    }
]

export const ClubMeetings = memo(({ data }: { data: FullBookClubInfoType }) => {
    const dispatch = useAppDispatch();
    const { currentUser } = useAppSelector(state => state.auth);
    const [filteredData, setFilteredData] = useState<MeetType[]>([]);

    const filterData = (type: string) => {
        let currData: MeetType[] = [];

        if (type === "old") {
            currData = data.meetings.filter(el => new Date(el.meeting_date).toISOString() < new Date().toISOString());
        } else {
            currData = data.meetings.filter(el => new Date(el.meeting_date).toISOString() >= new Date().toISOString());
        }

        setFilteredData([...currData]);
    }

    useEffect(() => {
        filterData("old");
    }, [])

    const changeUsersMeetstatus = useCallback((id: number) => {
        const userMeets = data.meetings.filter(el => {
            const validMeet = el.members.filter(elem => elem.id === currentUser.id);

            if (validMeet.length !== 0) return el
        });

        if (userMeets.length !== 0) {
            dispatch(MeetModel.unsubscribeToMeet({ currentUserId: currentUser.id, meetId: id }))

            return
        }

        dispatch(MeetModel.subscribeToMeet({ currentUser, meetId: id }))
    }, [])

    return <div className="club__slider_item club__item_meet">
        <h2 className="club__subtitle">
            Встречи
        </h2>

        <FilterByTag initialValue="old" values={filters} onClick={filterData} />

        <SlickSlider slidesToShow={filteredData.length <= 1 ? 1 : 2}>
            {filteredData.map(el => (
                <MeetCard data={el} key={el.id} onClick={changeUsersMeetstatus} />
            ))}
        </SlickSlider>
    </div>
})