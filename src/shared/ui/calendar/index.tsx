import { useCallback, useState } from "react";
import cn from 'classnames';

type monthType = {
  [key: number]: string
}

const monthes: monthType = {
  0: 'янв',
  1: "фев",
  2: 'март',
  3: 'апр',
  4: 'май',
  5: 'июнь',
  6: 'июль',
  7: 'авг',
  8: 'сент',
  9: 'окт',
  10: 'нояб',
  11: 'дек'
};

const dayOfWeeks: string[] = ['вс', 'пон', 'вт', 'ср', 'чт', 'пт', 'сб'];

const getDaysInMonth = (date: any) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i));
  }
  return days;
};

const renderWeekdays = () => {
  return dayOfWeeks.map((day, index) => (
    <li key={index} className="calendar__weeks">
      {day}
    </li>
  ));
};


const CustomCalendar = ({ onClick }: { onClick: (date: Date | string) => void }) => {
  const [date, setDate] = useState(new Date());
  const [curr, setCurr] = useState(0)

  const prevYear = () => {
    setDate(new Date(date.getFullYear() - 1, date.getMonth()));
  };

  const nextYear = () => {
    setDate(new Date(date.getFullYear() + 1, date.getMonth()));
  };

  const days = getDaysInMonth(date);
  const firstDay = days[0].getDay();
  const lastDay = days[days.length - 1].getDay();

  const handleClick = (day: any) => {
    console.log(day.getDate());

    onClick(new Date(date.getFullYear(), date.getMonth(), day.getDate()).toUTCString());
    setCurr(day.getDate())
  }

  const renderDays = useCallback(() => {
    const blanks = [];
    for (let i = 0; i < firstDay; i++) {
      blanks.push(<div key={-i} className="blank"></div>);
    }

    const monthDays: any = [];
    days.forEach((day) => {
      monthDays.push(
        <div key={day.getDate()} className={cn("day", day.getDate() === new Date().getDate() && 'day-active', curr === day.getDate() && 'day-target')} onClick={() => handleClick(day)}>
          <span>{day.getDate()}</span>
        </div >
      );
    });

    const totalDays = [...blanks, ...monthDays];

    const remainingBlanks = [];
    for (let i = 0; i < 6 - lastDay; i++) {
      remainingBlanks.push(<div key={`blank_${i}`} className="blank"></div>);
    }

    return [...totalDays, ...remainingBlanks];
  }, [date, curr]);


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
            return <li key={key} onClick={() => setDate(new Date(date.getFullYear(), Number(key)))} className={cn('calendar__month', date.getMonth() === Number(key) && 'calendar__month-active')}>{monthes[key]}</li>
          })}
        </ul>
      </div>
      <div className="calendar__body_item">
        <ul className="calendar__body_days">
          {renderWeekdays()}
          {renderDays()}
        </ul>
      </div>
    </div>
  </div>
}

export default CustomCalendar

