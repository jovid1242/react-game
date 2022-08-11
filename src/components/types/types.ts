export interface ICard {
    className: string;
    onClick?: () => void;
    children: any;
}

export interface IPlatform {
    index: number;
    startPosition: number;
    onClick?: () => void;
}