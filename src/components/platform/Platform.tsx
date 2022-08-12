import React, { FC, useState } from "react"

// hooks
import { useTypedSelector } from "hooks/useTypedSelector"

// component
import Card from "components/card/Card"
import { starticon } from "components/icon/icon"

// models
import { IPlatform } from "components/types/types"

// icons
import { BiDislike, BiLike, BiStar } from "react-icons/bi"

const likeIcon = <BiLike size="2.5em" color="white" />
const disLikeIcon = <BiDislike size="2.5em" color="white" />
const starIcon = <BiStar size="2.5em" color="white" />

const Platform: FC<IPlatform> = ({ index, startPosition }) => {
    const [dataIcon, setDataIcon] = useState(<></>)
    //
    const { gameOn } = useTypedSelector((state) => state.game)
    const { position } = useTypedSelector((state) => state.game)

    const endgame = () => {
        window.location.reload()
    }

    // click card
    const handleClick = () => {
        if (!gameOn) {
            if (index === position) {
                setDataIcon(likeIcon)
                endgame()
            } else {
                setDataIcon(disLikeIcon)
                endgame()
            }
        }
    }

    return (
        <>
            <Card className="card-main" onHandleClick={handleClick}>
                {index === startPosition ? starticon : dataIcon}
            </Card>
        </>
    )
}

export default Platform
