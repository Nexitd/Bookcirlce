import { memo, useEffect, useState } from "react"
import { SlickSlider } from "widgets/slider"
import { PolCard } from "entites/pols"
import { ACCOUNT_TYPE, FullBookClubInfoType, PolType } from "shared/types"
import { FilterByTag } from "features/filter"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "shared/api"
import { Button } from "shared/ui"

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
    const navigate = useNavigate();
    const { currentUser } = useAppSelector(state => state.auth)
    const [filteredData, setFilteredData] = useState<PolType[]>([]);


    const filterData = (type: string) => {
        let currData: PolType[] = [];

        if (type === "old") {
            currData = data.pols.filter(el => el.isFinished);
        } else {
            currData = data.pols.filter(el => !el.isFinished);
        }

        setFilteredData([...currData]);
    }

    useEffect(() => {
        filterData("old");
    }, [])



    return <div className="club__slider_item club__item_pols">
        <h2 className="club__subtitle">опросы</h2>

        <div className="club__item_flex">
            <FilterByTag initialValue="old" values={filters} onClick={filterData} />
            {ACCOUNT_TYPE[currentUser.role] === 'moder' && <Button onClick={() => navigate("/club/add-pol")} text="Добавить опрос" />}
        </div>

        <SlickSlider slidesToShow={filteredData.length <= 1 ? 1 : 2}>
            {filteredData.map(el => (
                <PolCard data={el} key={el.id} />
            ))}
        </SlickSlider>
    </div>
})