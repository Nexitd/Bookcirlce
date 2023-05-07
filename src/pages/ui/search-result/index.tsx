import { useCallback, useEffect, useState } from "react";
import { SearchBook } from "features/search";
import { useAppSelector } from "shared/api";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ClubCard } from "entites/books-club";
import { BookCard } from "entites/books";

const SearcResult = () => {
  const [resData, setResData] = useState([]);

  const { clubs, myClubs } = useAppSelector((state) => state.books_club);
  const { books } = useAppSelector((state) => state.book);

  const [searchParams] = useSearchParams();

  const getType = searchParams.get("type");

  const data: any = {
    books: books,
    clubs: clubs,
    myClubs: myClubs,
  };

  const navigate = useNavigate();

  const handleClick = useCallback(
    (id: number) => {
      navigate(`/${getType}/${id}`);
    },
    [navigate]
  );

  const onSearch = (e: string) => {
    const testFoo = data[getType ?? "books"].filter((el: any) => {
      return (
        e.trim() !== "" &&
        el.title.toLocaleLowerCase().includes(e.toLocaleLowerCase())
      );
    });
    setResData(testFoo);
  };

  const renderCard = (el: any) => {
    if (getType === "books") {
      return <BookCard key={el.id} data={el} onClick={handleClick} />;
    }
    return <ClubCard key={el.id} data={el} onClick={handleClick} />;
  };

  useEffect(() => {
    onSearch(searchParams.get("title") ?? "");
  }, []);

  return (
    <div className="wrapper__container search-result__container">
      <SearchBook
        onSearch={onSearch}
        placeholder={searchParams.get("title") ?? ""}
      />
      {!!resData.length && (
        <div className="search__content">
          {resData.map((el: any) => {
            return renderCard(el);
          })}
        </div>
      )}
    </div>
  );
};

export default SearcResult;
