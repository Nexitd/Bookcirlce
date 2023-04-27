import { useAppSelector } from "shared/api";
import SlickSlider from "widgets/slider/ui";

export const BooksCharacteristics = ({ title }: { title: string }) => {
  const { categories } = useAppSelector((state) => state.books_club);

  return (
    <div className="club__slider_item">
      <h2 className="club__subtitle">{title}</h2>
      <SlickSlider slidesToShow={6} variableWidth>
        {categories.map((el, index) => {
          return (
            <div className="club__slider_category" key={index}>
              {el}
            </div>
          );
        })}
      </SlickSlider>
    </div>
  );
};
