import { useCallback } from "react";
import classNames from "classnames";
import moment from "moment";

type RenderDaysPropsType = {
    date: any,
    firstDay: any;
    days: any;
    lastDay: any;
    curr: number;
    handleClick: (day: any) => void
}

export const RenderDays = ({ date, firstDay, days, lastDay, curr, handleClick }: RenderDaysPropsType) => {
    const render = useCallback(() => {
        const blanks = [];
        for (let i = 0; i < firstDay; i++) {
            // рисуем пустые дивы
            blanks.push(<div key={-i} className="blank"></div>);
        }

        const monthDays: any = [];
        days.forEach((day: Date) => {
            // рисуем дни по меяцам
            monthDays.push(
                <div
                    key={day.getDate()}
                    className={classNames("day",
                        moment(day).format("DD.MM.YYYY") === moment().format("DD.MM.YYYY") && 'day-active',
                        curr === day.getDate() && 'day-target')}
                    onClick={() => handleClick(day)}>
                    <span>{day.getDate()}</span>
                </div >
            );
        });

        // общее количество дней
        const totalDays = [...blanks, ...monthDays];

        const remainingBlanks = [];
        for (let i = 0; i < 6 - lastDay; i++) {
            remainingBlanks.push(<div key={`blank_${i}`} className="blank"></div>);
        }

        return [...totalDays, ...remainingBlanks];
    }, [date, curr]);

    return <>
        {render()}
    </>
}