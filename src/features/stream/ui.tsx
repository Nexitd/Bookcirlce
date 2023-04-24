import { StreamModel } from "entites/stream";
import { useAppDispatch, useAppSelector } from "shared/api"

export const NewMessageField = () => {
    const { currentUser } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch();

    const onSend = (message: string) => dispatch(StreamModel.createMessage({
        name: currentUser.name,
        surname: currentUser.surname,
        message
    }))

}