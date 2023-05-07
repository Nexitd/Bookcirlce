import { memo } from "react";
import { BookCardType } from "shared/types";
import { Button, ColorableTag } from "shared/ui";

type BookCardPropsType = {
    data: BookCardType;
    onClick: (id: number) => void;
    isBtn?: boolean;
    btnClick?: () => void
}

export const BookCard = memo(({ data, onClick, isBtn = false, btnClick = () => { } }: BookCardPropsType) => {
    return <div className="book__card" onClick={() => onClick(data.id)}>
        <div className="book__card_head">
            <img src={data.image} alt="" />
        </div>
        <div className="book__card_body">
            <h3 className="book__card_title">{data.title}</h3>
        </div>
        <div className="book__card_footer">
            <p className="book__card_text">{data.author}</p>
            <ColorableTag icon={<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.61273 15.4427C3.22629 15.6413 2.78872 15.2942 2.86652 14.8508L3.69625 10.1213L0.173916 6.76462C-0.155264 6.45092 0.0151358 5.87737 0.456125 5.81472L5.3546 5.11885L7.53872 0.792305C7.73547 0.402565 8.26844 0.402565 8.46519 0.792305L10.6493 5.11885L15.5478 5.81472C15.9888 5.87737 16.1592 6.45092 15.83 6.76462L12.3077 10.1213L13.1374 14.8508C13.2152 15.2942 12.7776 15.6413 12.3912 15.4427L8.00195 13.1868L3.61273 15.4427Z" fill="#222222" />
            </svg>} text={data.rate.toFixed()} />
            {isBtn && <Button text="Выбрать" onClick={btnClick} />}
        </div>
    </div>
});