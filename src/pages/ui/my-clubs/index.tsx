import { MyClubsItem } from "entites/books-club/ui"
import { SearchBook } from "features/my-clubs"

const MyClubs = () => {
    const handleSubmit = () => { }
    return (
        <div className="wrapper__container">
            <div className="club">
                <SearchBook onSearch={handleSubmit} />

                <MyClubsItem />
            </div>
        </div>
    )
}

export default MyClubs