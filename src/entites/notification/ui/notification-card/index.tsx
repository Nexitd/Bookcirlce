import moment from "moment"
import { FC } from "react"
import { NotificationType } from "shared/types"
import { Button } from "shared/ui"

type NotificationCardType = {
    data: NotificationType
    role: 'guest' | 'member' | 'moder';
    onClick: (id: number) => void;
}

const NotificationCard: FC<NotificationCardType> = ({ data, role, onClick }) => {
    return <div className="notification__card">
        <div className="notification__card_head">
            <p className="notification__card_title">{data.title}</p>
            <span className="notification__card_date">{moment(data.date).format("HH:mm DD.MM.YYYY")}</span>
        </div>
        <div className="notification__card_body">
            <div className="notification__tag">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 14C7 14 6 14 6 13C6 12 7 9 11 9C15 9 16 12 16 13C16 14 15 14 15 14H7Z" fill="#222222" />
                    <path d="M11 8C12.6569 8 14 6.65685 14 5C14 3.34315 12.6569 2 11 2C9.34315 2 8 3.34315 8 5C8 6.65685 9.34315 8 11 8Z" fill="#222222" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.21636 14C5.07556 13.7159 5 13.3791 5 13C5 11.6445 5.67905 10.2506 6.93593 9.27997C6.3861 9.10409 5.7451 9 5 9C1 9 0 12 0 13C0 14 1 14 1 14H5.21636Z" fill="#222222" />
                    <path d="M4.5 8C5.88071 8 7 6.88071 7 5.5C7 4.11929 5.88071 3 4.5 3C3.11929 3 2 4.11929 2 5.5C2 6.88071 3.11929 8 4.5 8Z" fill="#222222" />
                </svg>
                <span className="notification__tag_text">{data.club}</span>
            </div>

            <p className="notification__card_text">{data.description}</p>
        </div>
        <div className="notification__card_footer">
            <Button text="Скрыть" className="notification__card_btn" onClick={() => onClick(data.id)} />
            {role === "moder" && <Button text="Присоедениться" className="notification__card_connect" />}
        </div>
    </div>
}

export default NotificationCard