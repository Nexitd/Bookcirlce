import { useState } from "react";
import cn from 'classnames';
import { dayOfWeeks, monthes } from "../config";
import { getDaysInMonth } from "../lib/get-days-in-month";
import { RenderWeekdays } from "../lib/render-weekdays";
import { RenderDays } from "../lib/render-days";

const CustomCalendar = ({ onClick }: { onClick: (date: Date | string) => void }) => {
  // дата
  const [date, setDate] = useState(new Date());
  // текущий день
  const [curr, setCurr] = useState(0)

  const prevYear = () => {
    setDate(new Date(date.getFullYear() - 1, date.getMonth()));
    setCurr(0)
  };

  const nextYear = () => {
    setDate(new Date(date.getFullYear() + 1, date.getMonth()));
    setCurr(0)
  };

  const days = getDaysInMonth(date);
  const firstDay = days[0].getDay();
  const lastDay = days[days.length - 1].getDay();

  const handleClick = (day: any) => {
    // проверка на встречу есть ли в данный день
    onClick(new Date(date.getFullYear(), date.getMonth(), day.getDate()).toUTCString());
    setCurr(day.getDate())
  }



  return <div className="calendar">
    <div className="calendar__head">
      <button onClick={prevYear} className="calendar__head_btn">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M11.3536 1.64645C11.5488 1.84171 11.5488 2.15829 11.3536 2.35355L5.70711 8L11.3536 13.6464C11.5488 13.8417 11.5488 14.1583 11.3536 14.3536C11.1583 14.5488 10.8417 14.5488 10.6464 14.3536L4.64645 8.35355C4.45118 8.15829 4.45118 7.84171 4.64645 7.64645L10.6464 1.64645C10.8417 1.45118 11.1583 1.45118 11.3536 1.64645Z" fill="#222222" />
        </svg>
      </button>
      <h2 className="calendar__head_title">
        {date.getFullYear()}
      </h2>
      <button onClick={nextYear} className="calendar__head_btn">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z" fill="#222222" />
        </svg>
      </button>
    </div>

    <div className="calendar__body">
      <div className="calendar__body_item">
        <ul className="calendar__body_monthes">
          {Object.keys(monthes).map((key: any) => {
            return <li
              key={key}
              onClick={() => { setDate(new Date(date.getFullYear(), Number(key))); setCurr(0) }}
              className={cn('calendar__month',
                date.getMonth() === Number(key) && 'calendar__month-active')}
            >
              {monthes[key]}
            </li>
          })}
        </ul>
      </div>
      <div className="calendar__body_item">
        <ul className="calendar__body_days">
          <RenderWeekdays dayOfWeeks={dayOfWeeks} />
          <RenderDays
            date={date}
            days={days}
            lastDay={lastDay}
            firstDay={firstDay}
            curr={curr}
            handleClick={handleClick} />
        </ul>
      </div>
    </div>
  </div>
}

export default CustomCalendar

