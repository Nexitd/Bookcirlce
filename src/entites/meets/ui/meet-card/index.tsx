import { FC, useMemo } from "react"
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment"
import { StreamModel } from "entites/stream";
import { Button, ColorableTag } from "shared/ui"
import { ACCOUNT_TYPE, MeetType } from "shared/types"
import { useAppDispatch, useAppSelector } from "shared/api";

interface IMeetCard {
    data: MeetType;
    onClick: (id: number) => void;
}

export const MeetCard: FC<IMeetCard> = ({ data, onClick }) => {
    // текущий юзер
    const { currentUser } = useAppSelector(state => state.auth);
    // id клуба 
    const { id } = useParams()
    // редирект функция
    const navigate = useNavigate()
    // проверяем есть ли пользователь в этой встрече
    const userIncludes = useMemo(() => {
        const validMeet = data.members.filter(elem => elem.id === currentUser.id);

        return Boolean(validMeet.length)
    }, [data.members.length])

    const dispatch = useAppDispatch()

    return <div className="meet__card">
        <h2 className="meet__card_title">{data.title}</h2>

        <ColorableTag className="meet__card_tag" text={data.title_tag} icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1.78312C7.01509 0.936527 5.58683 0.809035 4.28732 0.94011C2.77322 1.09283 1.24459 1.61241 0.293099 2.0449C0.114601 2.12604 0 2.30401 0 2.50009V13.5001C0 13.6701 0.0863761 13.8284 0.229307 13.9205C0.372238 14.0125 0.55214 14.0256 0.706901 13.9553C1.58875 13.5544 3.01012 13.074 4.38768 12.9351C5.79565 12.793 6.97747 13.0223 7.60957 13.8124C7.70445 13.931 7.84811 14.0001 8 14.0001C8.15189 14.0001 8.29555 13.931 8.39043 13.8124C9.02253 13.0223 10.2043 12.793 11.6123 12.9351C12.9899 13.074 14.4113 13.5544 15.2931 13.9553C15.4479 14.0256 15.6278 14.0125 15.7707 13.9205C15.9136 13.8284 16 13.6701 16 13.5001V2.50009C16 2.30401 15.8854 2.12604 15.7069 2.0449C14.7554 1.61241 13.2268 1.09283 11.7127 0.94011C10.4132 0.809035 8.98491 0.936527 8 1.78312Z" fill="#222222" />
        </svg>
        } />

        <ColorableTag className="meet__card_tag" icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM7.5 1.07655C6.83057 1.28128 6.16462 1.89722 5.61275 2.93199C5.43997 3.25594 5.283 3.61363 5.14499 3.99999H7.5V1.07655ZM4.08954 3.99999C4.26796 3.44139 4.48325 2.92479 4.73039 2.4614C4.90911 2.1263 5.10862 1.81241 5.32726 1.52835C4.08119 2.04354 3.01629 2.90813 2.25469 3.99999H4.08954ZM3.50845 7.49999C3.53819 6.62317 3.6457 5.7817 3.82001 4.99999H1.67363C1.30933 5.76687 1.08035 6.61049 1.01758 7.49999H3.50845ZM4.84686 4.99999C4.66006 5.76497 4.54152 6.60778 4.50906 7.49999H7.5V4.99999H4.84686ZM8.5 4.99999V7.49999H11.4909C11.4585 6.60778 11.3399 5.76497 11.1531 4.99999H8.5ZM4.50906 8.49999C4.54152 9.39221 4.66006 10.235 4.84686 11H7.5V8.49999H4.50906ZM8.5 8.49999V11H11.1531C11.3399 10.235 11.4585 9.39221 11.4909 8.49999H8.5ZM5.14499 12C5.283 12.3864 5.43997 12.744 5.61275 13.068C6.16462 14.1028 6.83057 14.7187 7.5 14.9234V12H5.14499ZM5.32726 14.4716C5.10863 14.1876 4.90911 13.8737 4.73039 13.5386C4.48325 13.0752 4.26796 12.5586 4.08954 12H2.25469C3.01629 13.0919 4.08119 13.9565 5.32726 14.4716ZM3.82001 11C3.6457 10.2183 3.53819 9.37682 3.50845 8.49999H1.01758C1.08035 9.3895 1.30933 10.2331 1.67363 11H3.82001ZM10.6727 14.4716C11.9188 13.9565 12.9837 13.0919 13.7453 12H11.9104C11.732 12.5586 11.5167 13.0752 11.2696 13.5386C11.0909 13.8737 10.8914 14.1876 10.6727 14.4716ZM8.5 12V14.9234C9.16942 14.7187 9.83537 14.1028 10.3872 13.068C10.56 12.744 10.717 12.3864 10.855 12H8.5ZM12.18 11H14.3264C14.6907 10.2331 14.9196 9.3895 14.9824 8.49999H12.4915C12.4618 9.37682 12.3543 10.2183 12.18 11ZM14.9824 7.49999C14.9196 6.61049 14.6907 5.76687 14.3264 4.99999H12.18C12.3543 5.7817 12.4618 6.62317 12.4915 7.49999H14.9824ZM11.2696 2.4614C11.5167 2.92479 11.732 3.44139 11.9104 3.99999H13.7453C12.9837 2.90812 11.9188 2.04353 10.6727 1.52835C10.8914 1.81241 11.0909 2.1263 11.2696 2.4614ZM10.855 3.99999C10.717 3.61363 10.56 3.25594 10.3872 2.93199C9.83537 1.89722 9.16942 1.28128 8.5 1.07655V3.99999H10.855Z" fill="#222222" />
        </svg>
        } text={data.meeting_type} />

        <ColorableTag className="meet__card_tag" text={moment(data.meeting_date).format("DD.MM.YYYY HH:mm")} icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 0C3.77614 0 4 0.223858 4 0.5V1H12V0.5C12 0.223858 12.2239 0 12.5 0C12.7761 0 13 0.223858 13 0.5V1H14C15.1046 1 16 1.89543 16 3V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V3C0 1.89543 0.895431 1 2 1H3V0.5C3 0.223858 3.22386 0 3.5 0ZM1 4V14C1 14.5523 1.44772 15 2 15H14C14.5523 15 15 14.5523 15 14V4H1Z" fill="#222222" />
        </svg>
        } />

        <ColorableTag className="meet__card_tag" text={data.members.length.toString()} icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 14C7 14 6 14 6 13C6 12 7 9 11 9C15 9 16 12 16 13C16 14 15 14 15 14H7Z" fill="#222222" />
            <path d="M11 8C12.6569 8 14 6.65685 14 5C14 3.34315 12.6569 2 11 2C9.34315 2 8 3.34315 8 5C8 6.65685 9.34315 8 11 8Z" fill="#222222" />
            <path fillRule="evenodd" clipRule="evenodd" d="M5.21636 14C5.07556 13.7159 5 13.3791 5 13C5 11.6445 5.67905 10.2506 6.93593 9.27997C6.3861 9.10409 5.7451 9 5 9C1 9 0 12 0 13C0 14 1 14 1 14H5.21636Z" fill="#222222" />
            <path d="M4.5 8C5.88071 8 7 6.88071 7 5.5C7 4.11929 5.88071 3 4.5 3C3.11929 3 2 4.11929 2 5.5C2 6.88071 3.11929 8 4.5 8Z" fill="#222222" />
        </svg>
        } />

        <p className="meet__card_text">{data.description}</p>

        {/*  если не модер и даты нормыльные показываем эту кнопку */}
        {ACCOUNT_TYPE[currentUser.role] !== "moder" && moment(data.meeting_date).format("DD.MM.YYYY HH:mm") >= moment().format("DD.MM.YYYY HH:mm") &&
            <Button text={userIncludes ? "Отменить участие" : "Принять участие"} className="meet__card_btn meet__card_btn-ghost" onClick={() => onClick(data.id)} />
        }
        {/* если модер показываем эту кнопку */}
        {ACCOUNT_TYPE[currentUser.role] === 'moder' && <div className="meet__card_btns">

            <Button text='Начать встречу' className="meet__card_btn meet__card_btn-ghost" onClick={() => dispatch(StreamModel.changeStreamOnlineStatus())} />
            <Button text='Редактировать' className="meet__card_btn" onClick={() => navigate(`/edit-meet?club_id=${id}&meet_id=${data.id}`)} />
        </div>}
    </div>
}