import { FC } from "react"

// styles
import "styles/card/card.scss"

// models
import { ICard } from "components/models"

const Card: FC<ICard> = ({ className, onHandleClick, children }) => {
    return (
        <div className={"card " + className} onClick={onHandleClick}>
            {children}
        </div>
    )
}
export default Card
