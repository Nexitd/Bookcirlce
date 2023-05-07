import { memo, useEffect, useState } from "react"
import { SlickSlider } from "widgets/slider"
import { PolCard } from "entites/pols"
import { ACCOUNT_TYPE, FullBookClubInfoType, PolType } from "shared/types"
import { FilterByTag } from "features/filter"
import { useNavigate, useParams } from "react-router-dom"
import { useAppSelector } from "shared/api"
import { Button } from "shared/ui"

// фильтры для табов
const filters = [
    {
        id: 1,
        name: "old",
        title: "Завершенные"
    },
    {
        id: 1,
        name: "present",
        title: "Текущие"
    }
]

export const ClubPols = memo(({ data }: { data: FullBookClubInfoType }) => {
    // id клуба
    const { id } = useParams()
    // функция редиректа
    const navigate = useNavigate();
    // текущий юзер ситсемы
    const { currentUser } = useAppSelector(state => state.auth)
    // массив с отфильтрованной датой
    const [filteredData, setFilteredData] = useState<PolType[]>([]);


    const filterData = (type: string) => {
        let currData: PolType[] = [];

        if (type === "old") {
            // если тип old возвращаем только те опросы, что уже завершились
            currData = data.pols.filter(el => el.isFinished);
        } else {
            // возвращаем опросы, которые еще не завершились
            currData = data.pols.filter(el => !el.isFinished);
        }

        // наполняем массив
        setFilteredData([...currData]);
    }


    // первая работа таба
    useEffect(() => {
        filterData("old");
    }, [])



    return <div className="club__slider_item club__item_pols">
        <h2 className="club__subtitle">опросы</h2>

        <div className="club__item_flex">
            {/* табы */}
            <FilterByTag initialValue="old" values={filters} onClick={filterData} />
            {/* кнопка добавление опроса */}
            {ACCOUNT_TYPE[currentUser.role] === 'moder' && <Button onClick={() => navigate(`/club/add-pol?club_id=${id}`)} text="Добавить опрос" />}
        </div>

        <SlickSlider slidesToShow={filteredData.length <= 1 ? 1 : 2}>
            {filteredData.map(el => (
                <PolCard data={el} key={el.id} />
            ))}
        </SlickSlider>
    </div>
})