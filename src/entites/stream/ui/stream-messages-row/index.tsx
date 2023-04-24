import { useAppSelector } from "shared/api"
import { StreamMessage } from "../stream-message"

export const StreamMessagesRow = () => {
    const { messages } = useAppSelector(state => state.stream)

    return <div className="stream__row">
        <h2 className="stream__row_title">Чат</h2>

        <div className="stream__row_messages">
            {messages.map(el => (
                <StreamMessage data={el} key={el.id} />
            ))}
        </div>
    </div>
}