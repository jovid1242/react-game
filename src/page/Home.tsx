import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

// store
import { GameActionCreators } from "store/reducers/game/actionCreators"

// hooks
import { useTypedSelector } from "hooks/useTypedSelector"

// components
import Header from "components/header"
import Step from "components/step"
import Platform from "components/platform/Platform"
import TopLayout from "components/layouts/TopLayout"
import LeftLayout from "components/layouts/LeftLayout"

// styles
import "styles/home/home.scss"

const Home = () => {
    const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const [stepKeys, setStepKeys] = useState<Array<number>>([])

    let { position, startPosition, steps } = useTypedSelector(
        (state) => state.game
    )

    const dispatch = useDispatch()

    const randomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const startGame = () => {
        position = randomNumber(1, 9)
        startPosition = position
        dispatch(GameActionCreators.setPosition(position))
        dispatch(GameActionCreators.setStartPosition(position))
        dispatch(GameActionCreators.setGameOn(true))
        generateSteps()
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
        dispatch(GameActionCreators.setPosition(position))
        return step
    }

    const generateSteps = () => {
        for (let i = 1; i < 9; i++) {
            setTimeout(() => {
                stepKeys.push(renderStep())
                setStepKeys([...stepKeys])
                if (i === 8) {
                    dispatch(GameActionCreators.setGameOn(false))
                }
            }, 2000 * i)
        }
    }

    useEffect(() => {
        startGame()
    }, [])

    return (
        <div className="home">
            <div className="container">
                <div className="home__wrapper">
                    <Header title="????????????????" />
                    <TopLayout />
                    <LeftLayout />
                    <div className="row">
                        {data?.map((item) => {
                            return (
                                <Platform
                                    index={item}
                                    startPosition={startPosition}
                                    key={item + "game"}
                                />
                            )
                        })}
                    </div>
                    <div className="action">
                        <div className="row">
                            <Step steps={stepKeys} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home
