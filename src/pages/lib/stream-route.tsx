import { useMemo } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "shared/api"

type TRoute = {
    element: React.ComponentType;
};

//  роут для страницы со стримом, определяет можно ли попасть на страницу стрима
const StreamRoute = ({ element: RouteComponent }: TRoute) => {
    // стрим и данные
    const { stream } = useAppSelector(state => state.stream);
    // текущий юзер
    const { currentUser } = useAppSelector(state => state.auth)

    //  проверяем есть ли наш пользователь в списке участников стрима
    const isUserInList = useMemo(() => {
        const userInList = stream.members.filter(el => el.id === currentUser.id);

        return Boolean(userInList.length)
    }, [stream, stream.members]);


    // если юзер есть в списке и стрим начался - пропускаем его, иначе реедирект к моим клубам

    return isUserInList && stream.isGoing ? <RouteComponent /> : <Navigate to='/my-clubs' />
}

export default StreamRoute;