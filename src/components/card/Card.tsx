import { FC } from "react"

// styles
import "styles/card/card.scss"

// type
import { ICard } from "components/types/types"

const Card: FC<ICard> = ({ className, onHandleClick, children }) => {
    return (
        <div className={"card " + className} onClick={onHandleClick}>
            {children}
        </div>
    )
}
export default Card
