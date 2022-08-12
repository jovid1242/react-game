import React from "react"

// component
import Card from "components/card"

const TopLayout = () => {
    return (
        <div className="row">
            <Card className="card-top">
                <p className="text-white">A</p>
            </Card>
            <Card className="card-top">
                <p className="text-white">B</p>
            </Card>
            <Card className="card-top">
                <p className="text-white">C</p>
            </Card>
        </div>
    )
}

export default TopLayout
