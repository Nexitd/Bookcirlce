import { useCallback } from "react";
import classNames from "classnames";

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
            blanks.push(<div key={-i} className="blank"></div>);
        }

        const monthDays: any = [];
        days.forEach((day: Date) => {
            monthDays.push(
                <div
                    key={day.getDate()}
                    className={classNames("day",
                        day.getDate() === new Date().getDate() && 'day-active',
                        curr === day.getDate() && 'day-target')}
                    onClick={() => handleClick(day)}>
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

    return <>
        {render()}
    </>
}