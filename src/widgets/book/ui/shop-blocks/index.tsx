import { memo } from "react";
import { BooksPulpElements, EbookElements } from "shared/constants";
import { Button } from "shared/ui";

export const ShopBlocks = memo(({ type, title }: { type: 'paper' | 'ebook', title: string }) => {
    // выбираем массив с данными в зависимости от типа
    const data = type === 'paper' ? BooksPulpElements : EbookElements;

    return <div className="book__row">
        <h2 className="book__row_title">{title}</h2>

        <div className="book__shop">
            {data.map((el, index) => (
                <Button text={el} key={index} className="book__shop_block" />
            ))}
        </div>
    </div>
})