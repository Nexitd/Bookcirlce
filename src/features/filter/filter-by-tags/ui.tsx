import { useState } from "react";
import cn from 'classnames';

type FilterItem = {
    id: number;
    name: string;
    title: string;
}

type FilterByTagsPopsType = {
    initialValue: string;
    values: FilterItem[];
    onClick: (type: string) => void
}

export const FilterByTag = ({ initialValue = '', values, onClick }: FilterByTagsPopsType) => {
    const [selected, setSelected] = useState<string>(initialValue);

    const handleClick = (type: string) => {
        onClick(type);
        setSelected(type);
    }

    return (
        <div className="notification__tags">
            {values.map((el) => (
                <div key={el.id} className={cn("notification__tags_item", selected === el.name && 'active')} onClick={() => handleClick(el.name)}>
                    <span>{el.title}</span>
                </div>
            ))}
        </div >
    )
}

