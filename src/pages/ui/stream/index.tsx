import { MembersBar, MessagesBar } from "features/stream";
import { StreamContent } from "widgets/stream-main-content";


// страница стрима
const Stream = () => {
    return <div className="stream">
        <MembersBar />
        <StreamContent />
        <MessagesBar />
    </div>
}

export default Stream;