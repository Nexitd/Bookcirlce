import { memo } from "react"
import { StreamItemMessageType } from "shared/types"

type StreamMessagePropsType = {
    data: StreamItemMessageType
}


export const StreamMessage = memo(({ data }: StreamMessagePropsType) => {
    return <div className="stream__message">
        <h2 className="stream__message_title">{data.name} {data.surname}</h2>

        <p className="stream__message_text">{data.message}</p>
    </div>
})

