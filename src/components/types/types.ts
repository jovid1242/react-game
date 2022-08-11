export interface ICard {
    className: string;
    onClick?: () => void;
    children: any;
}

export interface IPlatform {
    index: number;
    position: number;
    onClick?: () => void;
}