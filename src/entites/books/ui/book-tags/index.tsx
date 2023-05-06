import { memo } from "react";
import { useAppDispatch, useAppSelector } from "shared/api";
import {
  BookCategory,
  BookGenre,
  BookClubCategoriesTypeDefinition,
} from "shared/types";
import { ColorableTag } from "shared/ui";
import { SlickSlider } from "widgets/slider";
import { changeFilter } from "entites/books/model";

export const BookTags = memo(
  ({ title, type }: { title: string; type: "genre" | "category" | "club" }) => {
    const { filterTags } = useAppSelector((state) => state.filter);
    // const { categories } = useAppSelector((state) => state.books_club);
    const data =
      type === "genre"
        ? BookGenre
        : "category"
        ? BookCategory
        : BookClubCategoriesTypeDefinition;

    const dispatch = useAppDispatch();

    // console.log(BookGenre, BookClubCategoriesTypeDefinition, "type");

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
