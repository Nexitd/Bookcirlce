import { NavLink, useLocation, useParams } from "react-router-dom";
import { useAppSelector } from "shared/api";
import { Breadcrumbs } from "shared/ui";
import TestCrumbCopy from "shared/ui/crumbs/test-crumb-copy";

const BooksClubPage = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const { clubs } = useAppSelector((state) => state.books_club);
  const clubTitle = clubs.filter((el) => el.id === Number(id))[0].title;
  const currPath = pathname.split("/").filter((el) => !!el)[0];
  //   console.log(pathname.split("/").filter((el) => el !== "")[0], "p");
  //   console.log(clubTitle);
  //   console.log(pathname);

  return (
    <div>
      <Breadcrumbs path={pathname} />{" "}
      <TestCrumbCopy
        data={[
          {
            to: `/${currPath}`,
            label: currPath === "my-clubs" ? "Мои клубы" : "Книжные клубы",
          },
          { to: "", label: clubTitle },
        ]}
      />
    </div>
  );
};

export default BooksClubPage;
