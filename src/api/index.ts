import { ClassList, DishesList } from "../data";
import { IClass, IDishes } from '../page/type';

export const getClassList = (): Promise<{classList: IClass[], dishesList: IDishes[]}> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                classList: ClassList,
                dishesList: DishesList,
            });
        }, 1000);
    });
};
