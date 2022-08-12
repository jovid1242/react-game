import React from "react"

// components
import Card from "components/card"

// icons
import {
    BiLeftArrowAlt,
    BiRightArrowAlt,
    BiArrowFromBottom,
    BiArrowToBottom,
} from "react-icons/bi"

const Step = ({ steps }: any = []) => {
    const bottomIcon = <BiArrowToBottom size="2.5em" color="white" />
    const topIcon = <BiArrowFromBottom size="2.5em" color="white" />
    const leftIcon = <BiLeftArrowAlt size="2.5em" color="white" />
    const rightIcon = <BiRightArrowAlt size="2.5em" color="white" />

    return (
        <>
            {steps.map((item: number) => {
                return (
                    <Card className="card-action" key={item + Math.random()}>
                        {item === 3
                            ? bottomIcon
                            : item === 1
                            ? rightIcon
                            : item === -1
                            ? leftIcon
                            : topIcon}
                    </Card>
                )
            })}
        </>
    )
}

export default Step
