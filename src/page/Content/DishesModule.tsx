import React, { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { isValidArray } from "../../utils";
import { IClass, IDishes } from "../type";
import { ImagePreview } from "zarm";
import MyIcon from '../Component/Icon';
import cls from 'classnames';
import { Toast } from 'zarm';

interface IProps {
    dishesList: IDishes[];
    classList: IClass[];
    shoppingCartUpdate: (data: any)=>void;
    shoppingCartList: IDishes[];
}

const DishesModule = ({ dishesList, classList, shoppingCartUpdate, shoppingCartList }: IProps) => {
    const [imgShowList, setImgShowList] = useState(false);
    const [imgUrl, setImgUrl] = useState('');
    const moduleRef = useRef(null);

    const list = useMemo(()=>{
        const classId = classList.find(c=>c.isSelect)?.id;
        return dishesList.filter(c=>c.classId === classId);
    },[dishesList, classList]);

    useEffect(()=>{
        if(isValidArray(classList)){
            moduleRef.current && moduleRef.current.scrollTo && moduleRef.current.scrollTo({top: 0});
        }
    },[classList]);

    const addDishes = useCallback((dis: IDishes, isDel: boolean)=>{
        // 判断当前所有菜不能超过十个
        if(!isDel && shoppingCartList.length>=10){
            Toast.show({
                content: (
                    <div className="err-tip">
                        <MyIcon className="err-tip-icon" type="icon-kulian"/>
                        <p className="err-tip-text">不能再多了，再多大厨累死了～</p>
                    </div>
                ),
                stayTime: 3000,
            })
            return;
        }
        shoppingCartUpdate && dis && shoppingCartUpdate({dishes: dis, isDel});
    },[shoppingCartList]);

    if (!isValidArray(dishesList) || !isValidArray(list)) {
        return null;
    }

    return (
        <div ref={(_)=>{moduleRef.current = _;}} className="detail-module">
            {list.map((dishes, index) => {
                const isDel = !!shoppingCartList.find(s=>s.id === dishes.id);
                return (
                    <div
                        className="detail-module-item flex"
                        key={`DishesModule-item-${index}`}
                    >
                        <img
                            className="detail-module-item-img"
                            src={dishes.img}
                            onClick={()=>{
                                setImgShowList(true);
                                setImgUrl(dishes.img);
                            }}
                        />
                        <div style={{padding: '3px 0'}}>
                            <div className="detail-module-item-title">{dishes.name}</div>
                            <div className="detail-module-item-dec">{dishes.dec}</div>
                        </div>

                        <div>
                            <MyIcon onClick={()=>{addDishes(dishes, isDel)}} className={cls(['detail-module-item-icon', isDel ? '' : 'add'])} type={ isDel ? 'icon-jian' : 'icon-jia' }/>
                        </div>
                    </div>
                );
            })}

            <ImagePreview images={[{url: imgUrl, originUrl: imgUrl}]} visible={imgShowList} onClose={()=>{setImgShowList(false)}}/>
        </div>
    );
};

export default React.memo(DishesModule);
