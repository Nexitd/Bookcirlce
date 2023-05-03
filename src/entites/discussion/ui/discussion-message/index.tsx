import { memo } from "react";
import moment from "moment";
import { DiscussionMessageType } from "shared/types";

type DiscussionMessagePropsType = {
    data: DiscussionMessageType;
}

export const DiscussionMessage = memo(({ data }: DiscussionMessagePropsType) => {
    return <div className="discussion__message">
        <p className="discussion__message_text">{data.message}</p>
        <div className="discussion__message_footer">
            <div className="discussion__card_user">
                <div className="discussion__card_user">
                    <img src={data.user.avatar} alt="avatar" />
                    <p className="user__name">{data.user.name} {data.user.surname}</p>
                    <p className="user__time">{moment(data.message_date).format("DD.MM.YYYY HH:mm")}</p>
                </div>

                <div className="discussion__message_actions">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 2C9.31371 2 12 4.63257 12 7.88C12 4.63257 14.6863 2 18 2C21.3137 2 24 4.63257 24 7.88C24 12.7751 19.1487 14.5006 12.5873 22.2917C12.2816 22.6547 11.7184 22.6547 11.4127 22.2917C4.85131 14.5006 0 12.7751 0 7.88C0 4.63257 2.68629 2 6 2Z" fill="#222222" />
                    </svg>
                    <span>{data.likes}</span>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.08549 18.9056L0.651922 12.5068C-0.217307 11.9658 -0.217307 10.6342 0.651922 10.0932L9.08549 3.69439C9.95827 3.15112 11.0769 3.80821 11.0769 4.90122V7.4C13.8462 7.4 22.1538 7.4 24 23C19.3846 14.225 11.0769 15.2 11.0769 15.2V17.6988C11.0769 18.7918 9.95827 19.4489 9.08549 18.9056Z" fill="#222222" />
                    </svg>
                    <span>{data.replyes}</span>
                </div>
            </div>
        </div>
    </div>
})