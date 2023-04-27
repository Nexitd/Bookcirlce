import { memo, useEffect, useRef } from "react";
import { useAppSelector } from "shared/api"
import { StreamMessage } from "../stream-message"

export const StreamMessagesRow = memo(() => {
    const { stream } = useAppSelector(state => state.stream);
    const messagesRef: any = useRef(null)

    useEffect(() => {
        if (messagesRef && messagesRef.current) {
            const element = messagesRef.current;
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
