import { memo } from "react";
import { useAppDispatch, useAppSelector } from "shared/api";
import { SlickSlider } from "widgets/slider";
import { BookModel } from "entites/books";
import { ColorableTag } from "shared/ui";
import {
    BookCategory,
    BookGenre,
    BookClubCategoriesTypeDefinition,
} from "shared/types";

export const BookTags = memo(
    ({ title, type }: { title: string; type: "genre" | "category" | "club" }) => {
        const { filterTags } = useAppSelector((state) => state.filter);

        const data =
            type === "genre"
                ? BookGenre
                : "category"
                    ? BookCategory
                    : BookClubCategoriesTypeDefinition;

        const dispatch = useAppDispatch();


        return (
            <div className="book__row">
                <h2 className="book__row_title">{title}</h2>
                <SlickSlider slidesToShow={5.5} variableWidth>
                    {Object.values(data).map((value, index) => {
                        return (
                            <ColorableTag
                                onClick={() => dispatch(BookModel.changeFilter(value))}
                                text={value}
                                key={index}
                                className={filterTags.includes(value) ? "filter-active" : ""}
                            />
                        );
                    })}
                </SlickSlider>
            </div>
        );
    }
);
