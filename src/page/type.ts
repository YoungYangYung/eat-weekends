export interface IClass {
    name: string;
    id: string;
    isSelect?:boolean;
}

export interface IDishes {
    id: string;
    name: string;
    dec: string;
    classId: string;
    img: string;
}

export interface IState {
    classList: IClass[],
    dishesList: IDishes[],
    shoppingCartList: IDishes[],
}