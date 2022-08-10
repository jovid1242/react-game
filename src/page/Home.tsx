import React from "react"

// components
import Container from "../components/container/Container"
import Header from "../components/header/Header"
import Card from "../components/card/Card"

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
    const data = [
        {
            row: [
                {
                    status: null,
                    type: "card-top",
                    info: <p className="text-center text-white"></p>,
                },
                {
                    status: null,
                    type: "card-top",
                    info: <p className="text-center text-white">A</p>,
                },
                {
                    status: null,
                    type: "card-top",
                    info: <p className="text-center text-white">B</p>,
                },
                {
                    status: null,
                    type: "card-top",
                    info: <p className="text-center text-white">C</p>,
                },
            ],
        },
        {
            row: [
                {
                    status: null,
                    type: "card-left ",
                    info: <p className="text-center text-white">1</p>,
                },
                {
                    status: null,
                    type: "card-main",
                    info: null,
                },
                {
                    status: "succes",
                    type: "card-main",
                    info: (
                        <svg
                            width="80"
                            height="55"
                            viewBox="0 0 80 55"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width="80" height="25" fill="#B3B004" />
                            <path
                                d="M26.5803 11.6719C26.5405 11.2997 26.3729 11.0099 26.0774 10.8026C25.7848 10.5952 25.4041 10.4915 24.9354 10.4915C24.6058 10.4915 24.3232 10.5412 24.0874 10.6406C23.8516 10.7401 23.6712 10.875 23.5462 11.0455C23.4212 11.2159 23.3572 11.4105 23.3544 11.6293C23.3544 11.8111 23.3956 11.9687 23.478 12.1023C23.5632 12.2358 23.6783 12.3494 23.8232 12.4432C23.968 12.5341 24.1286 12.6108 24.3047 12.6733C24.4808 12.7358 24.6584 12.7884 24.8374 12.831L25.6555 13.0355C25.9851 13.1122 26.3018 13.2159 26.6058 13.3466C26.9126 13.4773 27.1868 13.642 27.4283 13.8409C27.6726 14.0398 27.8658 14.2798 28.0078 14.5611C28.1499 14.8423 28.2209 15.1719 28.2209 15.5497C28.2209 16.0611 28.0902 16.5114 27.8288 16.9006C27.5675 17.2869 27.1896 17.5895 26.6953 17.8082C26.2038 18.0241 25.6087 18.1321 24.9098 18.1321C24.2308 18.1321 23.6413 18.027 23.1413 17.8168C22.6442 17.6065 22.255 17.2997 21.9737 16.8963C21.6953 16.4929 21.5447 16.0014 21.522 15.4219H23.0774C23.1001 15.7259 23.1939 15.9787 23.3587 16.1804C23.5234 16.3821 23.7379 16.5327 24.0021 16.6321C24.2692 16.7315 24.5675 16.7812 24.897 16.7812C25.2408 16.7812 25.5419 16.7301 25.8004 16.6278C26.0618 16.5227 26.2663 16.3778 26.4141 16.1932C26.5618 16.0057 26.6371 15.7869 26.6399 15.5369C26.6371 15.3097 26.5703 15.1222 26.4396 14.9744C26.3089 14.8239 26.1257 14.6989 25.8899 14.5994C25.657 14.4972 25.3842 14.4062 25.0717 14.3267L24.0788 14.071C23.3601 13.8864 22.7919 13.6065 22.3743 13.2315C21.9595 12.8537 21.7521 12.3523 21.7521 11.7273C21.7521 11.2131 21.8913 10.7628 22.1697 10.3764C22.451 9.99006 22.8331 9.69034 23.3161 9.47727C23.799 9.26136 24.3459 9.15341 24.9567 9.15341C25.576 9.15341 26.1186 9.26136 26.5845 9.47727C27.0533 9.69034 27.4212 9.98722 27.6882 10.3679C27.9553 10.7457 28.093 11.1804 28.1016 11.6719H26.5803ZM29.2468 10.598V9.27273H36.2099V10.598H33.5124V18H31.9442V10.598H29.2468ZM37.6183 18H35.9308L39.0032 9.27273H40.9549L44.0316 18H42.3441L40.0131 11.0625H39.945L37.6183 18ZM37.6737 14.5781H42.2759V15.848H37.6737V14.5781ZM45.1811 18V9.27273H48.4538C49.1243 9.27273 49.6868 9.3892 50.1413 9.62216C50.5987 9.85511 50.9439 10.1818 51.1768 10.6023C51.4126 11.0199 51.5305 11.5071 51.5305 12.0639C51.5305 12.6236 51.4112 13.1094 51.1726 13.5213C50.9368 13.9304 50.5888 14.2472 50.1286 14.4716C49.6683 14.6932 49.103 14.804 48.4325 14.804H46.1016V13.4915H48.2195C48.6115 13.4915 48.9325 13.4375 49.1825 13.3295C49.4325 13.2187 49.6172 13.0582 49.7365 12.848C49.8587 12.6349 49.9197 12.3736 49.9197 12.0639C49.9197 11.7543 49.8587 11.4901 49.7365 11.2713C49.6143 11.0497 49.4283 10.8821 49.1783 10.7685C48.9283 10.652 48.6058 10.5938 48.2109 10.5938H46.7621V18H45.1811ZM49.6896 14.0455L51.8501 18H50.0859L47.9638 14.0455H49.6896ZM52.6023 10.598V9.27273H59.5653V10.598H56.8679V18H55.2997V10.598H52.6023Z"
                                fill="white"
                            />
                            <rect
                                x="65"
                                y="25"
                                width="2"
                                height="30"
                                fill="black"
                            />
                            <rect
                                x="12"
                                y="25"
                                width="2"
                                height="30"
                                fill="#0A0A0A"
                            />
                        </svg>
                    ),
                },
                {
                    status: null,
                    type: "card-main",
                    info: null,
                },
            ],
        },
        {
            row: [
                {
                    status: null,
                    type: "card-left ",
                    info: <p className="text-center text-white">2</p>,
                },
                {
                    status: null,
                    type: "card-main",
                    info: null,
                },
                {
                    status: "succes",
                    type: "card-main",
                    info: null,
                },
                {
                    status: null,
                    type: "card-main",
                    info: null,
                },
            ],
        },
        {
            row: [
                {
                    status: null,
                    type: "card-left ",
                    info: <p className="text-center text-white">3</p>,
                },
                {
                    status: null,
                    type: "card-main",
                    info: null,
                },
                {
                    status: "succes",
                    type: "card-main",
                    info: <BiStar size="2.5em" color="white" />,
                },
                {
                    status: null,
                    type: "card-main",
                    info: null,
                },
            ],
        },
    ]

    return (
        <div>
            <Container>
                <Header title={"Лабирант"} />
                {data?.map((el, i) => {
                    return (
                        <div className="row" key={i}>
                            {el.row.map((item, index) => {
                                return (
                                    <Card className={item.type} key={index}>
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
