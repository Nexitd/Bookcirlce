import { useAppSelector } from "shared/api"
import { Slider } from "shared/ui"


export const BooksCharacteristics = ({ title }: { title: string }) => {
    const { categories } = useAppSelector(state => state.books_club);

    return <div className="club__slider_item">
        <h2 className="club__subtitle">{title}</h2>

        <Slider slidesToShow={4}>
            {categories.map((el, index) => {
                return <div className="club__slider_category" key={index}>{el}</div>
            })}
        </Slider>
    </div>
}