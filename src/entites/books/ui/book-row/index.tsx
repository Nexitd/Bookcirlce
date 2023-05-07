import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "shared/api";
import { SlickSlider } from "widgets/slider";
import { BookCard } from "../book-card";

export const BookRow = memo(({ title }: { title: string }) => {
  const { book_cards } = useAppSelector((state) => state.book);
  const { filterTags } = useAppSelector((state) => state.filter);
  const navigate = useNavigate();

  const handleClick = useCallback(
    (id: number) => {
      navigate(`/books/${id}`);
    },
    [navigate]
  );

  const resBooks = book_cards.filter((el) => {
    const validData = el.book_tags.filter((elem) => filterTags.includes(elem));

    if (validData.length !== 0) return el;
  });

  const dataType = !!resBooks.length ? resBooks : book_cards;

  const slidesToShow = () => {
    if (dataType.length === 1) {
      return 1;
    } else if (dataType.length === 2) {
      return 2;
    }
    return 3;
  };

  return (
    <div className="book__row">
      <h2 className="book__row_title">{title}</h2>

      <SlickSlider slidesToShow={slidesToShow()}>
        {dataType.map((el) => (
          <BookCard data={el} key={el.id} onClick={() => handleClick(el.id)} />
        ))}
      </SlickSlider>
    </div>
  );
});
