import React, { FC, useState } from "react"

// component
import Card from "../card/Card"
import { starticon } from "../icon/icon"

// models
import { IPlatform } from "../types/types"

const Platform: FC<IPlatform> = ({ index, position, onClick }) => {
    const [dataIcon, setDataIcon] = useState(starticon)

    return (
        <>
            <Card className="card-main" onClick={() => {}}>
                {index === position ? starticon : ""}
            </Card>
        </>
    )
}

export default Platform
