import { useCallback } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "shared/api";
import { ClubCard } from "../club-card";
import SlickSlider from "widgets/slider/ui";
import NotificationCard from "entites/notification/ui/notification-card";

export const BooksClubItem = ({ title }: { title: string }) => {
  const { clubs } = useAppSelector((state) => state.books_club);
  const navigate = useNavigate();

  const handleClick = useCallback((id: number) => {
    navigate(`/club/${id}`);
  }, []);

  const { filtered_notifications } = useAppSelector(
    (state) => state.notification
  );

  return (
    <div className="club__slider_item">
      <h2 className="club__subtitle">{title}</h2>
      <SlickSlider slidesToShow={1} isSlice>
        {filtered_notifications.map((el) => {
          return (
            <NotificationCard
              data={el}
              key={el.id}
              role={"guest"}
              onClick={function (id: number): void {
                throw new Error("Function not implemented.");
              }}
            />
          );
        })}
      </SlickSlider>
      <SlickSlider slidesToShow={2}>
        {clubs.map((el) => (
          <ClubCard data={el} key={el.id} onClick={handleClick} />
        ))}
      </SlickSlider>
    </div>
  );
};
