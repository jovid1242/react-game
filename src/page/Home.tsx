import { useState } from "react"

// components
import Container from "../components/container/Container"
import Header from "../components/header/Header"
import Card from "../components/card/Card"
import { starticon } from "../components/icon/icon"

// icons
import {
    BiLike,
    BiDislike,
    BiStar,
    BiLeftArrowAlt,
    BiRightArrowAlt,
    BiArrowFromBottom,
    BiArrowToBottom,
} from "react-icons/bi"

// styles
import "../styles/home/home.scss"

const Home = () => {
    const [data, setData] = useState([
        {
            row: [
                {
                    id: 11,
                    status: null,
                    type: "card-top",
                    info: <p className="text-center text-white"></p>,
                },
                {
                    id: 12,
                    status: null,
                    type: "card-top",
                    info: <p className="text-center text-white">A</p>,
                },
                {
                    id: 13,
                    status: null,
                    type: "card-top",
                    info: <p className="text-center text-white">B</p>,
                },
                {
                    id: 14,
                    status: null,
                    type: "card-top",
                    info: <p className="text-center text-white">C</p>,
                },
            ],
        },
        {
            row: [
                {
                    id: 15,
                    status: null,
                    type: "card-left ",
                    info: <p className="text-center text-white">1</p>,
                },
                {
                    id: 1,
                    status: null,
                    type: "card-main",
                    info: null,
                },
                {
                    id: 2,
                    status: "succes",
                    type: "card-main",
                    info: null,
                },
                {
                    id: 3,
                    status: null,
                    type: "card-main",
                    info: null,
                },
            ],
        },
        {
            row: [
                {
                    id: 16,
                    status: null,
                    type: "card-left ",
                    info: <p className="text-center text-white">2</p>,
                },
                {
                    id: 4,
                    status: null,
                    type: "card-main",
                    info: null,
                },
                {
                    id: 5,
                    status: "succes",
                    type: "card-main",
                    info: null,
                },
                {
                    id: 6,
                    status: null,
                    type: "card-main",
                    info: null,
                },
            ],
        },
        {
            row: [
                {
                    id: 17,
                    status: null,
                    type: "card-left ",
                    info: <p className="text-center text-white">3</p>,
                },
                {
                    id: 7,
                    status: null,
                    type: "card-main",
                    info: null,
                },
                {
                    id: 8,
                    status: "succes",
                    type: "card-main",
                    info: <BiStar size="2.5em" color="white" />,
                },
                {
                    id: 9,
                    status: null,
                    type: "card-main",
                    info: null,
                },
            ],
        },
    ])

    const startGame = () => {
        const min = 1
        const max = 10
        const startNum = Math.floor(Math.random() * (max - min)) + min
        for (let i = 0; i < data.length; i++) {
            data[i].row.forEach((el) => {
                if (el.id === startNum) {
                    el.info = starticon
                }
            })
        }
    }

    return (
        <div>
            <Container>
                <Header title={"Лабирант"} />
                {data?.map((el, i) => {
                    return (
                        <div className="row" key={i}>
                            {el.row.map((item) => {
                                return (
                                    <Card className={item.type} key={item.id}>
                                        {item.info}
                                    </Card>
                                )
                            })}
                        </div>
                    )
                })}

                <div className="action">
                    <div className="row">
                        <Card className="card-action">
                            <BiLeftArrowAlt
                                onClick={() => startGame()}
                                size="2.5em"
                                color="white"
                            />
                        </Card>
                        <Card className="card-action">
                            <BiRightArrowAlt size="2.5em" color="white" />
                        </Card>
                        <Card className="card-action">
                            <BiArrowFromBottom size="2.5em" color="white" />
                        </Card>
                        <Card className="card-action">
                            <BiArrowToBottom size="2.5em" color="white" />
                        </Card>
                    </div>
                    <div className="row">
                        <Card className="card-action">
                            <BiLeftArrowAlt size="2.5em" color="white" />
                        </Card>
                        <Card className="card-action">
                            <BiRightArrowAlt size="2.5em" color="white" />
                        </Card>
                        <Card className="card-action">
                            <BiArrowFromBottom size="2.5em" color="white" />
                        </Card>
                        <Card className="card-action">
                            <BiArrowToBottom size="2.5em" color="white" />
                        </Card>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Home
