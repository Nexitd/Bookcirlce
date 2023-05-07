import { BookModel } from "entites/books";
import { useAppDispatch, useAppSelector } from "shared/api";
import SlickSlider from "widgets/slider/ui";
import cn from 'classnames'

export const BooksCharacteristics = ({ title }: { title: string }) => {
  // берем категории для фильтров
  const { categories } = useAppSelector((state) => state.books_club);
  // теги
  const { filterTags } = useAppSelector((state) => state.filter);
  // диспетчер из редакса
  const dispatch = useAppDispatch()

  return (
    <div className="club__slider_item">
      <h2 className="club__subtitle">{title}</h2>
      {/* рендер категорий */}
      <SlickSlider slidesToShow={6} variableWidth>
        {categories.map((el, index) => {
          return (
            <div
              key={index}
              className={cn("club__slider_category", filterTags.includes(el) ? "filter-active" : "")}
              onClick={() => dispatch(BookModel.changeFilter(el))}
            >
              {el}
            </div>
          );
        })}
      </SlickSlider>
    </div>
  );
};
