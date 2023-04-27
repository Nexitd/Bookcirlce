import { useAppSelector } from "shared/api";
import { Button } from "shared/ui";

const CameraIcon = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M0 5C0 3.89543 0.89543 3 2 3H9.5C10.5158 3 11.3548 3.75732 11.483 4.73817L14.5939 3.35557C15.2551 3.06166 16 3.54572 16 4.26938V11.7306C16 12.4543 15.2551 12.9383 14.5939 12.6444L11.483 11.2618C11.3548 12.2427 10.5158 13 9.5 13H2C0.89543 13 0 12.1046 0 11V5Z" fill="white" />
</svg>

const MicroIcon = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 3C5 1.34315 6.34315 0 8 0C9.65685 0 11 1.34315 11 3V8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8V3Z" fill="white" />
    <path d="M3.5 6.5C3.77614 6.5 4 6.72386 4 7V8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8V7C12 6.72386 12.2239 6.5 12.5 6.5C12.7761 6.5 13 6.72386 13 7V8C13 10.5927 11.0267 12.7245 8.5 12.9753V15H11.5C11.7761 15 12 15.2239 12 15.5C12 15.7761 11.7761 16 11.5 16H4.5C4.22386 16 4 15.7761 4 15.5C4 15.2239 4.22386 15 4.5 15H7.5V12.9753C4.97334 12.7245 3 10.5927 3 8V7C3 6.72386 3.22386 6.5 3.5 6.5Z" fill="white" />
</svg>

const ScreenIcon = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12C6 12.6667 5.91667 13.1667 5.75 13.5H5C4.72386 13.5 4.5 13.7239 4.5 14C4.5 14.2761 4.72386 14.5 5 14.5H11C11.2761 14.5 11.5 14.2761 11.5 14C11.5 13.7239 11.2761 13.5 11 13.5H10.25C10.0833 13.1667 10 12.6667 10 12H14C16 12 16 10 16 10V4C16 2 14 2 14 2H2C0 2 0 4 0 4V10C0 12 2 12 2 12H6Z" fill="white" />
</svg>



const StreamMainContent = () => {
    const { stream } = useAppSelector(state => state.stream);

    const moder = stream.members.find(el => el.role === 2);

    return <div className="stream__main">
        <div className="stream__main_item">
            <div className="stream__main_item-flex">
                <img src={moder?.avatar} alt="" />
                <p>{moder?.name} {moder?.surname}</p>
            </div>
        </div>
        <div className="stream__main_item">
            <div className="stream__main_avatars">
                {stream.members.map((el, index) => {
                    if (index < 12) {
                        return <div className="stream__main_avatar" key={el.id}>
                            <img key={el.id} src={el.avatar} alt="" />
                        </div>
                    }
                })}

                {stream.members.length > 12 && <span className="extra-avatars">...</span>}
            </div>
            <div className="stream__main_btns">
                <Button text={<CameraIcon />} />
                <Button text={<MicroIcon />} />
                <Button text={<ScreenIcon />} />
            </div>
        </div>
    </div>
}

export default StreamMainContent;