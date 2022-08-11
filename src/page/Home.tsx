import { useEffect, useState } from "react"

// components
import Container from "../components/container/Container"
import Header from "../components/header/Header"
import Card from "../components/card/Card"
import { starticon } from "../components/icon/icon"

// styles
import "../styles/home/home.scss"
import Step from "../components/step/Step"
import Platform from "../components/platform/Platform"

const Home = () => {
    const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    let [position, setPosition] = useState<number>(1)
    const [startPosition, setStartPosition] = useState<number>(1)
    const [stepKeys, setStepKeys] = useState<Array<number>>([])

    const randomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const startGame = () => {
        position = randomNumber(1, 9)
        setPosition(position)
        setStartPosition(position)
        generateSteps()
        console.log("aaa", position)
    }
    const right = 1
    const left = -1
    const top = -3
    const bottom = 3

    // click card
    const clickHundler = (userPosition: number) => {
        if (userPosition === position) {
            alert("succes")
        } else {
            alert("error")
        }
    }

    const steps: { [key: number]: Array<number> } = {
        1: [right, bottom],
        2: [left, right, bottom],
        3: [left, bottom],
        4: [top, right, bottom],
        5: [left, top, right, bottom],
        6: [left, top, bottom],
        7: [top, right],
        8: [left, top, right],
        9: [left, top],
    }

    const generateStep = () => {
        const max = steps[position].length - 1
        const min = 0
        const step = randomNumber(min, max)
        return steps[position][step]
    }

    const renderStep = () => {
        const step = generateStep()
        position = position + step
        setPosition(position)
        console.log("step pos" + position, position + step)

        return step
    }

    const generateSteps = () => {
        const keys: Array<number> = []
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                stepKeys.push(renderStep())
                setStepKeys([...stepKeys])
            }, 2000 * i)
        }
    }

    useEffect(() => {
        startGame()
    }, [])

    return (
        <div>
            <Container>
                <Header title="Лабирант" />
                <div className="row">
                    {data?.map((item) => {
                        return (
                            <Platform
                                index={item}
                                position={startPosition}
                                key={item + "game"}
                                onClick={() => clickHundler(item)}
                            />
                        )
                    })}
                </div>

                <div className="action">
                    <div className="row">
                        <Step steps={stepKeys} />
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Home
