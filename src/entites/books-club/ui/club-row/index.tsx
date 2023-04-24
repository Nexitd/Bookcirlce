import { ClubCard } from "../club-card"
import { BookClubType } from "shared/types"

type ClubRowPropsType = {
    renderedData: BookClubType[]
    handleClick: (id: number) => void
}

export const ClubRow = ({ renderedData, handleClick }: ClubRowPropsType) => {
    return <>
        {renderedData.map(el => (
            <ClubCard data={el} key={el.id} onClick={handleClick} />
        ))}
    </>
}