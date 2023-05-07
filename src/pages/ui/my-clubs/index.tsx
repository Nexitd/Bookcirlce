import { MyClubsItem } from "entites/books-club"
import { SearchBook } from "features/search"

// страница с моими клубами
const MyClubs = () => {
    const handleSubmit = () => { }
    return (
        <div className="wrapper__container">
            <div className="club">
                <SearchBook placeholder="Поиск книжных клубов" onSearch={handleSubmit} />

                <MyClubsItem />
            </div>
        </div>
    )
}

export default MyClubs