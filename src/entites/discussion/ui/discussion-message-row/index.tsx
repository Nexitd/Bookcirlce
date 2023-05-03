import { DiscussionMessageType } from "shared/types"
import { DiscussionMessage } from "../discussion-message"

export const DiscussionMessageRow = ({ data }: { data: DiscussionMessageType[] }) => {
    return <div className="dicussion__message_row-container">
        <div className="discussion__message_row">
            {data.map(el => (
                <DiscussionMessage key={el.id} data={el} />
            ))}
        </div>
    </div>
}