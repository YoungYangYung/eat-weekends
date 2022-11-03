import React, { useState, useEffect } from "react";
import { isValidArray } from "../../utils";
import { IDishes } from "../type";
import { ImagePreview } from "zarm";
import MyIcon from '../Component/Icon';

interface IProps {
    dishesList: IDishes[];
}

const DishesModule = ({ dishesList }: IProps) => {
    const [imgShowList, setImgShowList] = useState(false);
    const [imgUrl, setImgUrl] = useState('');

    if (!isValidArray(dishesList)) {
        return null;
    }

    return (
        <div className="detail-module">
            {dishesList.map((dishes, index) => {
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
                            <MyIcon className="detail-module-item-icon" type="icon-jia"/>
                        </div>
                    </div>
                );
            })}

            <ImagePreview images={[{url: imgUrl, originUrl: imgUrl}]} visible={imgShowList} onClose={()=>{setImgShowList(false)}}/>
        </div>
    );
};

export default React.memo(DishesModule);
