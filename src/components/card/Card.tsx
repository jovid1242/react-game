import { FC } from "react"

// styles
import "../../styles/card/card.scss"

// type
import { ICard } from "../types/types"

const Card: FC<ICard> = ({ className, children }) => {
    return <div className={"card " + className}>{children}</div>
}
export default Card
