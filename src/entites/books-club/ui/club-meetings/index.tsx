import { memo, useCallback, useEffect, useState } from "react";
import { SlickSlider } from "widgets/slider";
import { FilterByTag } from "features/filter";
import { MeetCard, MeetModel } from "entites/meets";
import { useAppDispatch, useAppSelector } from "shared/api";
import { ACCOUNT_TYPE, FullBookClubInfoType, MeetType } from 'shared/types';
import { Button } from "shared/ui";
import { useNavigate, useParams } from "react-router-dom";

// фильтры для табов

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
    // диспетчер из редакса, для вызова экшенов
    const dispatch = useAppDispatch();
    // функция редиректов
    const navigate = useNavigate();
    // id клуба
    const { id } = useParams()
    // текущий пользователь системы и его данные
    const { currentUser } = useAppSelector(state => state.auth);
    // стейт для фильтрации даты
    const [filteredData, setFilteredData] = useState<MeetType[]>([]);

    // фильтрация по типам старые и новые встречи
    const filterData = (type: string) => {
        let currData: MeetType[] = [];

        if (type === "old") {
            // если тип old, то возвращаем только те данные, у которых дата встречи меньше текущей даты
            currData = data.meetings.filter(el => new Date(el.meeting_date).toISOString() < new Date().toISOString());
        } else {
            // возвращаем данные, у которых дата встречи больше или равна текущей дате
            currData = data.meetings.filter(el => new Date(el.meeting_date).toISOString() >= new Date().toISOString());
        }

        // наполняем массив валидной датой
        setFilteredData([...currData]);
    }

    // первоначальное заполнение массива данными
    useEffect(() => {
        filterData("old");
    }, [])

    // изменение статуса 
    const changeUsersMeetstatus = useCallback((id: number) => {
        // возвращаем только те встречи, которые принадлежат текущему юзеру системы
        const userMeets = data.meetings.filter(el => {
            const validMeet = el.members.filter(elem => elem.id === currentUser.id);

            if (validMeet.length !== 0) return el
        });

        // если такие встречи есть, мы можем отписаться от них

        if (userMeets.length !== 0) {
            dispatch(MeetModel.unsubscribeToMeet({ currentUserId: currentUser.id, meetId: id }))

            return
        }

        // если встреч нет, мы можем записаться
        dispatch(MeetModel.subscribeToMeet({ currentUser, meetId: id }))
    }, [])

    return <div className="club__slider_item club__item_meet">
        <h2 className="club__subtitle">
            Встречи
        </h2>

        <div className="club__item_flex">
            {/* тэги */}
            <FilterByTag initialValue="old" values={filters} onClick={filterData} />
            {/* навигейт на страницу создания встречи */}
            {ACCOUNT_TYPE[currentUser.role] === "moder" && <Button onClick={() => navigate(`/club/add-meet?club_id=${id}`)} text="Добавить встречу" />}
        </div>


        {/* рендерим карточки встречи */}
        <SlickSlider slidesToShow={filteredData.length <= 1 ? 1 : 2}>
            {filteredData.map(el => (
                <MeetCard data={el} key={el.id} onClick={changeUsersMeetstatus} />
            ))}
        </SlickSlider>
    </div>
})