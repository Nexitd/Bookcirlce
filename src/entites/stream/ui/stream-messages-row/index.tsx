import { memo, useEffect, useRef } from "react";
import { useAppSelector } from "shared/api"
import { StreamMessage } from "../stream-message"

export const StreamMessagesRow = memo(() => {
    // модель стрима
    const { stream } = useAppSelector(state => state.stream);
    // ссылка на контейнер с сообщениями
    const messagesRef: any = useRef(null)

    useEffect(() => {
        // если ссылка есть и элемент есть
        if (messagesRef && messagesRef.current) {
            // берем элемент
            const element = messagesRef.current;
            // автоматически прокручиваем страницу до этого элеменета
            element.scroll({
                top: element.scrollHeight,
                left: 0,
                behavior: "smooth",
            });
        }
    }, [stream.messages])

    return <div className="stream__row_messages" ref={messagesRef}>
        {stream.messages.map(el => (
            <StreamMessage data={el} key={el.id} />
        ))}
    </div>
})
