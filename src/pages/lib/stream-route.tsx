import { useMemo } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "shared/api"

type TRoute = {
    element: React.ComponentType;
};


const StreamRoute = ({ element: RouteComponent }: TRoute) => {
    const { stream } = useAppSelector(state => state.stream);
    const { currentUser } = useAppSelector(state => state.auth)

    const isUserInList = useMemo(() => {
        const userInList = stream.members.filter(el => el.id === currentUser.id);

        return Boolean(userInList.length)
    }, [stream, stream.members]);



    return isUserInList && stream.isGoing ? <RouteComponent /> : <Navigate to='/my-clubs' />
}

export default StreamRoute;