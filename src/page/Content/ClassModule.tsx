import React, { useRef } from "react";
import cls from "classnames";
import { IClass } from "../type";
import { isValidArray } from "../../utils";

interface IProps {
    classList: IClass[];
    selectClass: (data: IClass)=>void;
}

const ClassModule = ({ classList, selectClass }: IProps) => {
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
                            c.isSelect && "select",
                        ])}
                        key={`content-class-${index}`}
                        onClick={()=>{
                            if(!c.isSelect){
                                selectClass(c);
                            }
                        }}
                    >
                        {c.name}
                    </div>
                );
            })}
        </div>
    );
};

export default React.memo(ClassModule);
