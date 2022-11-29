import React, { useMemo } from "react";
import { Popup } from "zarm";
import MyIcon from "../Component/Icon";
import { isValidArray } from "../../utils";
import { IDishes } from "../type";

interface IProps {
    visible: boolean;
    setIsShowDetail: (isShow: boolean) => void;
    shoppingCartList: IDishes[];
	shoppingCartUpdate: (data: any)=>void;
	delAllShoppingCart: ()=>void;
}

const DetailModule = ({
    visible,
    setIsShowDetail,
    shoppingCartList,
	shoppingCartUpdate,
	delAllShoppingCart,
}: IProps) => {
    useMemo(() => {
        if (!isValidArray(shoppingCartList) && visible) {
            setIsShowDetail(false);
        }
    }, [shoppingCartList, visible, setIsShowDetail]);

    return (
        <Popup
            onMaskClick={() => {
                setIsShowDetail(false);
            }}
            width="100%"
            direction="bottom"
            visible={visible}
        >
            <div className="footer-container-detail-module">
                <div className="footer-container-detail-module-header flex">
                    <div>
                        <MyIcon className="footer-container-detail-module-header-icon1" type="icon-caipin-" />
                        <span className="footer-container-detail-module-header-span1">菜品列表</span>
                    </div>
                    <div onClick={()=>{
						setIsShowDetail(false);
						delAllShoppingCart();
					}}>
                        <MyIcon className="footer-container-detail-module-header-icon2" type="icon-shanchu" />
                        <span className="footer-container-detail-module-header-span2">清空全部菜品</span>
                    </div>
                </div>
                <div className="footer-container-detail-module-content">
                    {shoppingCartList.map((cart) => {
                        return (
                            <div className="footer-container-detail-module-content-item flex">
                                <div className="footer-container-detail-module-content-item-left flex">
                                    <img
                                        src={cart.img}
                                        className="footer-container-detail-module-content-item-left-img"
                                        alt="加载中..."
                                    />
                                    <div className="footer-container-detail-module-content-item-left-name">
                                        {cart.name}
                                    </div>
                                </div>
                                <MyIcon
                                    className="footer-container-detail-module-content-item-icon"
                                    type="icon-jian"
									onClick={()=>{
										shoppingCartUpdate({dishes: cart, isDel: true})
									}}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </Popup>
    );
};

export default React.memo(DetailModule);
