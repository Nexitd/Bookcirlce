import { useCallback } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "shared/api";
import { ClubCard } from "../club-card";
import { SlickSlider } from "widgets/slider";

export const BooksClubItem = ({ title }: { title: string }) => {
  // берем данные клубов
  const { clubs } = useAppSelector((state) => state.books_club);
  // функция редиректа
  const navigate = useNavigate();

  // редирект на страницу клуба
  const handleClick = useCallback((id: number) => {
    navigate(`/book-clubs/${id}`);
  }, []);

  // берем список фильтров
  const { filterTags } = useAppSelector((state) => state.filter);

  // фильтруем дату только таким образом. чтобы в массив попадали только карточки с фильтрами включенными
  const resClubs = clubs.filter((el) => {
    const validData = el.category.filter((elem) => filterTags.includes(elem));

    if (validData.length !== 0) return el;
  });

  const dataType = !!resClubs.length ? resClubs : clubs;

  // слайды
  const slidesToShow = () => {
    if (dataType.length === 1) {
      return 1;
    }
    return 2;
  };

  return (
    <div className="club__slider_item">
      <h2 className="club__subtitle">{title}</h2>

      <SlickSlider slidesToShow={slidesToShow()}>
        {dataType.map((el) => (
          <ClubCard data={el} key={el.id} onClick={handleClick} />
        ))}
      </SlickSlider>
    </div>
  );
};
