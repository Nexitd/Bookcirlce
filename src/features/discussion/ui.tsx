import { BooksClubsModel } from "entites/books-club";
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "shared/api";
import { Button } from "shared/ui";

import img from "assets/images/avatar.png"

export const MessageField = ({ clubId, discussionId }: { clubId: number, discussionId: number }) => {
    const [messageText, setMessageText] = useState<string>('');
    const { currentUser } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch();

    const sendMessage = () => {
        if (messageText.trim() !== '') {
            dispatch(BooksClubsModel.addMessageToDiscuussion({
                club_id: clubId, discussion_id: discussionId, message: {
                    id: 0,
                    likes: 0,
                    replyes: 0,
                    message: messageText,
                    message_date: new Date(),
                    user: {
                        name: currentUser.name,
                        surname: currentUser.surname,
                        avatar: img
                    }
                }
            }))
        }

        setMessageText('')

        return
    }

    return <div className="discussion__form">
        <textarea name="message" placeholder="Напишите комментарий..." cols={30} rows={10} value={messageText} onChange={(e) => setMessageText(e.target.value)}></textarea>
        <Button text="Отправить" onClick={sendMessage} />
    </div>
}