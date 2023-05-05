import { MyClubsItem } from "entites/books-club";
import { SearchBook } from "features/search";
import { useNavigate } from "react-router-dom";

const MyClubs = () => {
  const navigate = useNavigate();

  const onSearch = (e: string) => {
    navigate(`/search-result?title=${e}&type=myClubs`);
  };

  return (
    <div className="wrapper__container">
      <div className="club">
        <SearchBook placeholder="Поиск книжных клубов" onSearch={onSearch} />

        <MyClubsItem />
      </div>
    </div>
  );
};

export default MyClubs;
