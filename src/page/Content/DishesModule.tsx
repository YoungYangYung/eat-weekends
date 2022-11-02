import React, { useState, useEffect } from "react";
import { isValidArray } from "../../utils";
import { IDishes } from "../type";
import { ImagePreview } from "zarm";

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
                        <div>
                            <div className="detail-module-item-title">{dishes.name}</div>
                            <div className="detail-module-item-dec">{dishes.dec}</div>
                        </div>
                    </div>
                );
            })}

            <ImagePreview images={[{url: imgUrl, originUrl: imgUrl}]} visible={imgShowList} onClose={()=>{setImgShowList(false)}}/>
        </div>
    );
};

export default React.memo(DishesModule);
