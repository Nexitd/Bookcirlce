import { Collapse } from "shared/ui"
import { collapseData } from "./config"
import { memo } from "react"


const Arrow = memo(() => <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M3.08709 8.71209C3.4532 8.34597 4.0468 8.34597 4.41291 8.71209L15 19.2992L25.5871 8.71209C25.9532 8.34597 26.5468 8.34597 26.9129 8.71209C27.279 9.0782 27.279 9.6718 26.9129 10.0379L15.6629 21.2879C15.2968 21.654 14.7032 21.654 14.3371 21.2879L3.08709 10.0379C2.72097 9.6718 2.72097 9.0782 3.08709 8.71209Z" fill="#222222" />
</svg>
)

// часто задаваемые вопросы
export const BookCollapse = () => {
    return <div className="book__row">
        <h2 className="book__row_title">рекомендации для обсуждения книги</h2>

        <div className="book__row_collapse">
            {collapseData.map(el => (
                <Collapse title={el.title} arrow={<Arrow />} key={el.id}>
                    <ol className="book__collapse">
                        {el.data.map(elem => (
                            <li key={elem.id} className="book__collapse_item">{elem.text}</li>
                        ))}
                    </ol>
                </Collapse>
            ))}
        </div>
    </div>
}