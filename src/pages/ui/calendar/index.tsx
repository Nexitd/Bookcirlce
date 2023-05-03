import { MeetCard, MeetModel } from "entites/meets"
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "shared/api"
import { ACCOUNT_TYPE } from "shared/types";
import { Button } from "shared/ui";
import { CustomCalendar } from "widgets/calendar";


const Calendar = () => {
    const { myMeet } = useAppSelector(state => state.meets);
    const { currentUser } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const addMeet = () => navigate('/create-meet')

    const handleClick = useCallback((id: number) => {
        dispatch(MeetModel.unsubscribeToMeet({ currentUserId: currentUser.id, meetId: id }))
    }, [])


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