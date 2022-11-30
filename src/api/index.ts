import { ClassList, DishesList } from "../data";
import { IClass, IDishes } from "../page/type";
import axios from './axios';

export const getClassList = (): Promise<{
    classList: IClass[];
    dishesList: IDishes[];
}> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                classList: ClassList,
                dishesList: DishesList,
            });
        }, 1000);
    });
};

export const sendEmail = (): Promise<{ code: number; message: string }> => {
    return axios.post("/sendEmail", { to: "haoyang_8_1@163.com", html: "hhh" });
};
