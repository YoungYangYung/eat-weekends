import React from "react";
import cls from "classnames";
import { IClass } from "../type";
import { isValidArray } from "../../utils";

interface IProps {
    classList: IClass[];
}

const ClassModule = ({ classList }: IProps) => {
    if (!isValidArray(classList)) {
        return null;
    }
    return (
        <div className="class-module">
            {classList.map((c, index) => {
                return (
                    <div
                        className={cls([
                            "class-module-item spacing",
                            index === 3 && "select",
                        ])}
                        key={`content-class-${index}`}
                    >
                        {c.name}
                    </div>
                );
            })}
        </div>
    );
};

export default React.memo(ClassModule);
