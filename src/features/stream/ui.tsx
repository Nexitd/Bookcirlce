import { useState } from "react";
import { StreamMessagesRow, StreamModel } from "entites/stream";
import { useAppDispatch, useAppSelector } from "shared/api"
import { Button } from "shared/ui";


export const MessagesBar = () => {
    // сообщение стрима
    const [streamMessage, setStreamMessage] = useState<string>('')
    // текущий ющер
    const { currentUser } = useAppSelector(state => state.auth);
    // диспетчер из редакса
    const dispatch = useAppDispatch();

    // создаем новое сообщение
    const onSend = (message: string) => dispatch(StreamModel.createMessage({
        name: currentUser.name,
        surname: currentUser.surname,
        message
    }))

    return <div className="stream__row">
        <h2 className="stream__row_title">Чат</h2>

        <div className="stream__row_messages-container">
            <StreamMessagesRow />
        </div>

        <div className="stream__form_container">
            <form className="stream__form" onSubmit={(e) => {
                e.preventDefault();

                if (streamMessage.trim() !== '') {
                    // если сообщение не пустое вызываем функцию создания сообщения
                    onSend(streamMessage);

                    setStreamMessage('');
                }
            }}>
                <input
                    placeholder="Напишите сообщение..."
                    type="text"
                    value={streamMessage}
                    className="stream__form_input"
                    onChange={(e) => setStreamMessage(e.target.value)} />
                <button className="stream__form_btn">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z" fill="#222222" />
                    </svg>
                </button>
            </form>
        </div>
    </div>
}


const MicroIcon = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 8C13 8.56433 12.9065 9.10683 12.7342 9.61285L11.9202 8.79889C11.9725 8.54075 12 8.27358 12 8V7C12 6.72386 12.2239 6.5 12.5 6.5C12.7761 6.5 13 6.72386 13 7V8Z" fill="#222222" />
    <path d="M8 12C8.81786 12 9.5784 11.7545 10.212 11.3333L10.9304 12.0517C10.2339 12.5563 9.40224 12.8857 8.5 12.9753V15H11.5C11.7761 15 12 15.2239 12 15.5C12 15.7761 11.7761 16 11.5 16H4.5C4.22386 16 4 15.7761 4 15.5C4 15.2239 4.22386 15 4.5 15H7.5V12.9753C4.97334 12.7245 3 10.5927 3 8V7C3 6.72386 3.22386 6.5 3.5 6.5C3.77614 6.5 4 6.72386 4 7V8C4 10.2091 5.79086 12 8 12Z" fill="#222222" />
    <path d="M11 3V7.87868L5.15801 2.03669C5.55931 0.852371 6.68011 0 8 0C9.65685 0 11 1.34315 11 3Z" fill="#222222" />
    <path d="M9.48561 10.6069L5 6.12132V8C5 9.65685 6.34315 11 8 11C8.5405 11 9.04761 10.8571 9.48561 10.6069Z" fill="#222222" />
    <path d="M1.64648 1.35353L13.6465 13.3535L14.3536 12.6464L2.35359 0.646423L1.64648 1.35353Z" fill="#222222" />
</svg>;

const CameraIcon = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10.9615 12.3653C11.2394 12.068 11.4276 11.6858 11.483 11.2618L14.5939 12.6444C15.2551 12.9383 16 12.4543 16 11.7306V4.26938C16 3.54572 15.2551 3.06166 14.5939 3.35557L11.483 4.73817C11.3548 3.75732 10.5158 3 9.5 3H4.27193L10.9615 12.3653ZM0.846576 3.3659C0.3344 3.72808 0 4.32499 0 5V11C0 12.1046 0.89543 13 2 13H7.72807L0.846576 3.3659Z" fill="#222222" />
    <path fillRule="evenodd" clipRule="evenodd" d="M10.5928 15.2906L0.592773 1.29059L1.40651 0.709351L11.4065 14.7094L10.5928 15.2906Z" fill="#222222" />
</svg>

const MembersIcon = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 14C7 14 6 14 6 13C6 12 7 9 11 9C15 9 16 12 16 13C16 14 15 14 15 14H7Z" fill="#222222" />
    <path d="M11 8C12.6569 8 14 6.65685 14 5C14 3.34315 12.6569 2 11 2C9.34315 2 8 3.34315 8 5C8 6.65685 9.34315 8 11 8Z" fill="#222222" />
    <path fillRule="evenodd" clipRule="evenodd" d="M5.21636 14C5.07556 13.7159 5 13.3791 5 13C5 11.6445 5.67905 10.2506 6.93593 9.27997C6.3861 9.10409 5.7451 9 5 9C1 9 0 12 0 13C0 14 1 14 1 14H5.21636Z" fill="#222222" />
    <path d="M4.5 8C5.88071 8 7 6.88071 7 5.5C7 4.11929 5.88071 3 4.5 3C3.11929 3 2 4.11929 2 5.5C2 6.88071 3.11929 8 4.5 8Z" fill="#222222" />
</svg>



export const MembersBar = () => {
    // стрим и данные стрима
    const { stream } = useAppSelector(state => state.stream);
    // диспетчер из редакса
    const dispatch = useAppDispatch()

    // завершаем стрим
    const finishStream = () => dispatch(StreamModel.changeStreamOnlineStatus())

    return <div className="stream__members">
        <div className="stream__members_container">
            <h2 className="stream__members_title">{stream.streamTitle}</h2>

            <div className="stream__members_list">
                <div className="stream__members_list-container">

                    <p className="stream__members_item">
                        <MembersIcon />

                        Участники ({stream.members.length})
                    </p>

                    <ul>
                        {stream.members.map(el => (
                            <li key={el.id} className="stream__members_item">
                                <MicroIcon />

                                <CameraIcon />

                                <span className="mr">{el.name}</span>

                                {el.surname}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <Button text="Завершить" onClick={finishStream} />
        </div>
    </div>
}