import { BooksClubsModel } from "entites/books-club";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "shared/api";
import { ACCOUNT_TYPE, DiscussionType } from "shared/types"
import { Button, ColorableTag } from "shared/ui";

type DiscussionCardPropsType = {
    data: DiscussionType;
    onClick?: (id: number) => void;
    isBtn?: boolean
}

export const DiscussionCard = ({ data, onClick = () => { }, isBtn = true }: DiscussionCardPropsType) => {
    // id страницы клуба
    const { id } = useParams()
    // текущий юзер
    const { currentUser } = useAppSelector(state => state.auth);
    // диспетчер из редакса
    const dispatch = useAppDispatch()

    return <div className="discussion__card" >
        <h2 className="discussion__card_title">{data.title}</h2>
        <ColorableTag className="discussion__card_tag" icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1.78263C7.01509 0.936038 5.58683 0.808547 4.28732 0.939621C2.77322 1.09234 1.24459 1.61192 0.293099 2.04441C0.114601 2.12555 0 2.30353 0 2.4996V13.4996C0 13.6696 0.0863761 13.828 0.229307 13.92C0.372238 14.012 0.55214 14.0251 0.706901 13.9548C1.58875 13.5539 3.01012 13.0735 4.38768 12.9346C5.79565 12.7926 6.97747 13.0218 7.60957 13.8119C7.70445 13.9306 7.84811 13.9996 8 13.9996C8.15189 13.9996 8.29555 13.9306 8.39043 13.8119C9.02253 13.0218 10.2043 12.7926 11.6123 12.9346C12.9899 13.0735 14.4113 13.5539 15.2931 13.9548C15.4479 14.0251 15.6278 14.012 15.7707 13.92C15.9136 13.828 16 13.6696 16 13.4996V2.4996C16 2.30353 15.8854 2.12555 15.7069 2.04441C14.7554 1.61192 13.2268 1.09234 11.7127 0.939621C10.4132 0.808547 8.98491 0.936038 8 1.78263Z" fill="#222222" />
        </svg>
        } text={data.discussion_tag} />
        <ColorableTag className="discussion__card_tag" icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 14C7 14 6 14 6 13C6 12 7 9 11 9C15 9 16 12 16 13C16 14 15 14 15 14H7Z" fill="#222222" />
            <path d="M11 8C12.6569 8 14 6.65685 14 5C14 3.34315 12.6569 2 11 2C9.34315 2 8 3.34315 8 5C8 6.65685 9.34315 8 11 8Z" fill="#222222" />
            <path fillRule="evenodd" clipRule="evenodd" d="M5.21636 14C5.07556 13.7159 5 13.3791 5 13C5 11.6445 5.67905 10.2506 6.93593 9.27997C6.3861 9.10409 5.7451 9 5 9C1 9 0 12 0 13C0 14 1 14 1 14H5.21636Z" fill="#222222" />
            <path d="M4.5 8C5.88071 8 7 6.88071 7 5.5C7 4.11929 5.88071 3 4.5 3C3.11929 3 2 4.11929 2 5.5C2 6.88071 3.11929 8 4.5 8Z" fill="#222222" />
        </svg>
        } text={data.members.length.toString()} />
        <ColorableTag className="discussion__card_tag" icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 15C12.4183 15 16 11.866 16 8C16 4.13401 12.4183 1 8 1C3.58172 1 0 4.13401 0 8C0 9.76087 0.743061 11.3699 1.96979 12.6001C1.87251 13.6162 1.55308 14.7299 1.19898 15.5664C1.12037 15.7521 1.27271 15.9603 1.47172 15.9277C3.72774 15.5584 5.06898 14.9897 5.65284 14.6939C6.39508 14.8929 7.18324 15 8 15Z" fill="#222222" />
        </svg>
        } text={data.messages.length.toString()} />

        <p className="discussion__card_text">{data.description}</p>

        <div className="discussion__card_footer">
            <div className="discussion__card_user">
                <img src={data.user.avatar} alt="avatar" />
                <p className="user__name">{data.user.name} {data.user.surname}</p>
                <p className="user__time">{moment(data.creation_time).format("DD.MM.YYYY HH:mm")}</p>
            </div>

            {isBtn &&
                <div className="discussion__card_btns">
                    {ACCOUNT_TYPE[currentUser.role] === "moder" &&
                        <Button className="discussion__card_btn-ghost" text="Удалить" onClick={() => dispatch(BooksClubsModel.deleteDiscussion({ clubId: Number(id), disId: data.id }))} />
                    }
                    <Button text="Открыть" onClick={() => onClick(data.id)} />
                </div>
            }
        </div>
    </div>
}