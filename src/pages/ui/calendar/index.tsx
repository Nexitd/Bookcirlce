import { MeetCard, MeetModel } from "entites/meets"
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "shared/api"
import { ACCOUNT_TYPE } from "shared/types";
import { Button } from "shared/ui";
import { CustomCalendar } from "widgets/calendar";


// Страница с календарем
const Calendar = () => {
    // мои встречи
    const { myMeet } = useAppSelector(state => state.meets);
    // текущий юзер
    const { currentUser } = useAppSelector(state => state.auth);
    // диспетчер из редакса
    const dispatch = useAppDispatch();
    // редирект функция
    const navigate = useNavigate()

    // редирект на страница создания встречи
    const addMeet = () => navigate('/create-meet')

    // отписка от встречи
    const handleClick = useCallback((id: number) => {
        dispatch(MeetModel.unsubscribeToMeet({ currentUserId: currentUser.id, meetId: id }))
    }, [])


    // получение моих встречи и проверка встречи на дату
    const checkDate = useCallback((date: Date | string) => {
        dispatch(MeetModel.getMyMeets(currentUser.id))
        dispatch(MeetModel.getMeetByDate({ date: date, user: currentUser }))
    }, [])

    useEffect(() => {
        checkDate(new Date().toUTCString());
    }, [])

    return <div className="wrapper__container calendarpage__container">
        <div className="calendarpage__container_item">
            <CustomCalendar onClick={checkDate} />
            {ACCOUNT_TYPE[currentUser.role] === 'moder' && <Button className="calendarpage__container_btn" onClick={addMeet} text="Добавить встречу" />}
        </div>
        <div className="calendarpage__container_item">
            {myMeet.map((el: any) => (
                <MeetCard data={el} key={el.id} onClick={handleClick} />
            ))}
        </div>
    </div>
}

export default Calendar