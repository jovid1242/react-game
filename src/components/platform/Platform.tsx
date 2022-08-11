import React, { FC, useState } from "react"

// hooks
import { useTypedSelector } from "hooks/useTypedSelector"

// component
import Card from "../card/Card"
import { starticon } from "../icon/icon"

// models
import { IPlatform } from "../types/types"

const Platform: FC<IPlatform> = ({ index, startPosition, onClick }) => {
    const [dataIcon, setDataIcon] = useState(starticon)
    const { position } = useTypedSelector((state) => state.game)

    if (position) {
    }

    console.log("position", position)

    return (
        <>
            <Card className="card-main" onClick={() => {}}>
                {index === startPosition ? starticon : ""}
            </Card>
        </>
    )
}

export default Platform
