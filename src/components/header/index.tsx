import { FC } from "react"

// styles
import "styles/header/header.scss"

// type of props
interface HeaderProps {
    title: string
}

const Header: FC<HeaderProps> = ({ title }) => {
    return (
        <div className="header">
            <div className="header__wrapper">
                <h1>{title}</h1>
            </div>
            <div className="hr"></div>
        </div>
    )
}

export default Header
