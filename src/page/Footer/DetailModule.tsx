import React, { useMemo } from "react";
import { Popup } from "zarm";
import { isValidArray } from "../../utils";
import { IDishes, IClass } from "../type";

interface IProps {
	visible: boolean;
	setIsShowDetail: (isShow: boolean) => void;
	shoppingCartList: IDishes[];
}

const DetailModule = ({
	visible,
	setIsShowDetail,
	shoppingCartList,
}: IProps) => {
	useMemo(() => {
		if (!isValidArray(shoppingCartList) && visible) {
			setIsShowDetail(false);
		}
	}, [shoppingCartList]);

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
				{ shoppingCartList.map(cart=>{
					return (
						<div></div>
					);
				}) }
			</div>
		</Popup>
	);
};

export default React.memo(DetailModule);
