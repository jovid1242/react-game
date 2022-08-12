export interface ICard {
    className: string
    onHandleClick?: () => number | void
    children?: any
}

export interface IPlatform {
    index: number
    startPosition: number
    onHandleClick?: () => number | void
}
