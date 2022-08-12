import React from "react"

// component
import Card from "components/card"

const LeftLayout = () => {
    return (
        <div className="left-bar">
            <Card className="card-left mb2">
                <p className="text-white">1</p>
            </Card>
            <Card className="card-left mb2">
                <p className="text-white">2</p>
            </Card>
            <Card className="card-left mb2">
                <p className="text-white">3</p>
            </Card>
        </div>
    )
}

export default LeftLayout
