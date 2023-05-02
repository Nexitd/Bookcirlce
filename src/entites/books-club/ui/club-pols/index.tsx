import { memo, useEffect, useState } from "react"
import { SlickSlider } from "widgets/slider"
import { PolCard } from "entites/pols"
import { FullBookClubInfoType, PolType } from "shared/types"
import { FilterByTag } from "features/filter"

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
    const [filteredData, setFilteredData] = useState<PolType[]>([]);

    const filterData = (type: string) => {
        let currData: PolType[] = [];

        if (type === "old") {
            currData = data.pols.filter(el => el.isFinished);
            console.log(currData)
        } else {
            currData = data.pols.filter(el => !el.isFinished);
            console.log(currData)
        }
        console.log(currData)

        setFilteredData([...currData]);
    }

    useEffect(() => {
        filterData("old");
    }, [])



    return <div className="club__slider_item club__item_pols">
        <h2 className="club__subtitle">опросы</h2>

        <FilterByTag initialValue="old" values={filters} onClick={filterData} />

        <SlickSlider slidesToShow={filteredData.length <= 1 ? 1 : 2}>
            {filteredData.map(el => (
                <PolCard data={el} key={el.id} />
            ))}
        </SlickSlider>
    </div>
})