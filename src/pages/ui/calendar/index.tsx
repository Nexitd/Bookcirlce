import { MeetCard, MeetModel } from "entites/meets"
import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "shared/api"
import { CustomCalendar } from "widgets/calendar";


const Calendar = () => {
    const { calendar__meets } = useAppSelector(state => state.meets);
    const { currentUser } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    const handleClick = useCallback((id: number) => {
        dispatch(MeetModel.unsubscribeToMeet({ currentUserId: currentUser.id, meetId: id }))
    }, [])


    const checkDate = useCallback((date: Date | string) => {
        dispatch(MeetModel.getMeetByDate(date))
    }, [])

    useEffect(() => {
        checkDate(new Date().toUTCString())
    }, [])

    return <div className="wrapper__container calendarpage__container">
        <div className="calendarpage__container_item">
            <CustomCalendar onClick={checkDate} />
        </div>
        <div className="calendarpage__container_item">
            {calendar__meets.map(el => (
                <MeetCard data={el} key={el.id} onClick={handleClick} />
            ))}
        </div>
    </div>
}

export default Calendar