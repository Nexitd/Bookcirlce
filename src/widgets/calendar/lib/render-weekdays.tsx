

export const RenderWeekdays = ({ dayOfWeeks }: { dayOfWeeks: any }) => {
    return <>
        {dayOfWeeks.map((day: string, index: number) => (
            <li key={index} className="calendar__weeks">
                {day}
            </li>
        ))}
    </>
};