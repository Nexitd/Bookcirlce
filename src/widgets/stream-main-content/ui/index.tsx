import { useState } from "react";
import { useAppSelector } from "shared/api";
import { Button } from "shared/ui";
import { SlickSlider } from "widgets/slider";

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

const CrossCamera = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10.9615 12.3653C11.2394 12.068 11.4276 11.6858 11.483 11.2618L14.5939 12.6444C15.2551 12.9383 16 12.4543 16 11.7306V4.26938C16 3.54572 15.2551 3.06166 14.5939 3.35557L11.483 4.73817C11.3548 3.75732 10.5158 3 9.5 3H4.27193L10.9615 12.3653ZM0.846576 3.3659C0.3344 3.72808 0 4.32499 0 5V11C0 12.1046 0.89543 13 2 13H7.72807L0.846576 3.3659Z" fill="white" />
    <path fillRule="evenodd" clipRule="evenodd" d="M10.5928 15.2906L0.592773 1.29059L1.40651 0.709351L11.4065 14.7094L10.5928 15.2906Z" fill="white" />
</svg>

const CrossMicro = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 8C13 8.56433 12.9065 9.10683 12.7342 9.61285L11.9202 8.79889C11.9725 8.54075 12 8.27358 12 8V7C12 6.72386 12.2239 6.5 12.5 6.5C12.7761 6.5 13 6.72386 13 7V8Z" fill="white" />
    <path d="M8 12C8.81786 12 9.5784 11.7545 10.212 11.3333L10.9304 12.0517C10.2339 12.5563 9.40224 12.8857 8.5 12.9753V15H11.5C11.7761 15 12 15.2239 12 15.5C12 15.7761 11.7761 16 11.5 16H4.5C4.22386 16 4 15.7761 4 15.5C4 15.2239 4.22386 15 4.5 15H7.5V12.9753C4.97334 12.7245 3 10.5927 3 8V7C3 6.72386 3.22386 6.5 3.5 6.5C3.77614 6.5 4 6.72386 4 7V8C4 10.2091 5.79086 12 8 12Z" fill="white" />
    <path d="M11 3V7.87868L5.15801 2.03669C5.55931 0.852371 6.68011 0 8 0C9.65685 0 11 1.34315 11 3Z" fill="white" />
    <path d="M9.48561 10.6069L5 6.12132V8C5 9.65685 6.34315 11 8 11C8.5405 11 9.04761 10.8571 9.48561 10.6069Z" fill="white" />
    <path d="M1.64648 1.35353L13.6465 13.3535L14.3536 12.6464L2.35359 0.646423L1.64648 1.35353Z" fill="white" />
</svg>

const CrossScreen = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M0.42126 2.71847C-1.43408e-08 3.29198 0 4 0 4V10C0 12 2 12 2 12H6C6 12.6667 5.91667 13.1667 5.75 13.5H5C4.72386 13.5 4.5 13.7239 4.5 14C4.5 14.2761 4.72386 14.5 5 14.5H11C11.2761 14.5 11.5 14.2761 11.5 14C11.5 13.8819 11.459 13.7733 11.3905 13.6877L11.3123 13.6095C11.2267 13.541 11.1181 13.5 11 13.5H10.25C10.1097 13.2193 10.0284 12.8205 10.0062 12.3034L0.42126 2.71847ZM14.49 11.9549C16 11.6583 16 10 16 10V4C16 2 14 2 14 2H4.53516L14.49 11.9549Z" fill="white" />
    <rect x="1.16406" y="0.468506" width="17.9955" height="0.983471" transform="rotate(45 1.16406 0.468506)" fill="white" />
</svg>



const StreamMainContent = () => {
    // стрим и даннаые
    const { stream } = useAppSelector(state => state.stream);

    const [cameraClick, setCameraClick] = useState(false)
    const [microClick, setMicroClick] = useState(false)
    const [screenClick, setScreenClick] = useState(false)

    // находим модера
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
                <SlickSlider slidesToShow={3} variableWidth>
                    {stream.members.map((el) => {
                        return <div className="stream__main_avatar" key={el.id}>
                            <img key={el.id} src={el.avatar} alt="" />
                        </div>

                    })}
                </SlickSlider>
            </div>
            <div className="stream__main_btns">
                <Button text={!cameraClick ? <CameraIcon /> : <CrossCamera />} onClick={() => setCameraClick(prev => !prev)} />
                <Button text={!microClick ? <MicroIcon /> : <CrossMicro />} onClick={() => setMicroClick(prev => !prev)} />
                <Button text={!screenClick ? <ScreenIcon /> : <CrossScreen />} onClick={() => setScreenClick(prev => !prev)} />
            </div>
        </div>
    </div>
}

export default StreamMainContent;