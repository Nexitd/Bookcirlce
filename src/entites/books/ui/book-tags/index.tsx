import { memo } from "react";
import { BookCategory, BookGenre } from "shared/types";
import { ColorableTag } from "shared/ui";
import { SlickSlider } from "widgets/slider";

export const BookTags = memo(({ title, type }: { title: string, type: "genre" | "category" }) => {
    const data = type === "genre" ? BookGenre : BookCategory

    return <div className="book__row">
        <h2 className="book__row_title">{title}</h2>

        <SlickSlider slidesToShow={5.5} variableWidth>
            {Object.values(data).map((value, index) => (
                <ColorableTag text={value} key={index} />
            ))}
        </SlickSlider>
    </div>
})