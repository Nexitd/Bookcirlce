import { useLocation } from "react-router-dom";
import { Breadcrumbs } from "shared/ui"

const BooksClubPage = () => {
    const { pathname } = useLocation()
    return <div>
        <Breadcrumbs path={pathname} />
    </div>
}

export default BooksClubPage;