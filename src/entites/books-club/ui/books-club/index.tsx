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
    navigate(`/book-clubs/${id}`)
  }, [])


  return (
    <div className="club__slider_item">
      <h2 className="club__subtitle">{title}</h2>

{/* ренедер в слайдере карточек клуба */}
      <SlickSlider slidesToShow={2}>
        {clubs.map((el) => (
          <ClubCard data={el} key={el.id} onClick={handleClick} />
        ))}
      </SlickSlider>
    </div>
  );
};
