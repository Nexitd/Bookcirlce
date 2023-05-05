import { memo } from "react";
import { useAppDispatch, useAppSelector } from "shared/api";
import { BookCategory, BookGenre } from "shared/types";
import { ColorableTag } from "shared/ui";
import { SlickSlider } from "widgets/slider";
import { changeFilter } from "entites/books/model";

export const BookTags = memo(
  ({ title, type }: { title: string; type: "genre" | "category" }) => {
    const data = type === "genre" ? BookGenre : BookCategory;

    const dispatch = useAppDispatch();

    const { filterTags } = useAppSelector((state) => state.filter);

    return (
      <div className="book__row">
        <h2 className="book__row_title">{title}</h2>
        <SlickSlider slidesToShow={5.5} variableWidth>
          {Object.values(data).map((value, index) => {
            return (
              <ColorableTag
                onClick={() => dispatch(changeFilter(value))}
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
