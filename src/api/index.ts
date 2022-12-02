import { ClassList, DishesList } from "../data";
import { IClass, IDishes } from "../page/type";
import axios from "./axios";

interface AxiosRes {
    data: ISendEmail
}

interface ISendEmail {
    code: number;
    message: string;
}

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

const getHtml = (dishes: IDishes[]) => {
	return `<h2>有人点了以下菜品，挥舞你的勺子吧:</h2>
    <ul>
        ${dishes.map((d) => {
			return `<li>${d.name}</li>`;
		})}
    </ul>`.replace(/\,/g,'');
};

export const sendEmail = (
	dishes: IDishes[]
): Promise<AxiosRes> => {
	const html = getHtml(dishes);
	return axios.post("/sendEmail", {
		to: ["18390209675@163.com, 872636204@qq.com"],
		html,
	});
};
