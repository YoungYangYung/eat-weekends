import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import { Toast, Loading, ActivityIndicator } from "zarm";
import {
	Shopping_Cart_Update,
	Del_All_Shopping_Cart,
} from "../../redux/action";
import { sendEmail } from "../../api";
import { isValidArray } from "../../utils";
import MyIcon from "../Component/Icon";
import { IState } from "../type";
import DetailModule from "./DetailModule";
import "./style.scss";

interface IProps extends IState {
	isShowClass?: boolean;
	shoppingCartUpdate: (data: any) => void;
	delAllShoppingCart: () => void;
}

const Footer = ({
	shoppingCartList,
	shoppingCartUpdate,
	delAllShoppingCart,
}: IProps) => {
	const [isShowDetail, setIsShowDetail] = useState(false);

	const submit = useCallback(() => {
		if (!isValidArray(shoppingCartList)) {
			Toast.show({
				content: "还没点菜呢～",
				stayTime: 3000,
			});
			return;
		}

		Loading.show({ content: <ActivityIndicator size="lg" /> });
		sendEmail(shoppingCartList)
			.then((res) => {
				if (res.data.code === 0) {
					Toast.show({
						content: "已通知大厨，等吃吧～",
						stayTime: 3000,
					});
					delAllShoppingCart();
					return;
				}

				Toast.show({
					content: "哦吼，出错了，快联系开发～",
					stayTime: 3000,
				});
			})
			.catch((err) => {
				Toast.show({
					content: "哦吼，出错了，快联系开发～",
					stayTime: 3000,
				});
			})
			.finally(() => {
				Loading.hide();
			});
	}, [shoppingCartList]);

	return (
		<div className="footer-container">
			<div className="footer-container-content flex">
				<div
					onClick={() => {
						if (!isValidArray(shoppingCartList)) {
							Toast.show({
								content: "还没点菜呢～",
								stayTime: 3000,
							});
							return;
						}
						setIsShowDetail(true);
					}}
					className="footer-container-content-left flex"
				>
					<MyIcon className="icon-wan" type="icon-wan" />
					{isValidArray(shoppingCartList) ? (
						<div className="footer-container-content-left-badge badge">
							{shoppingCartList.length}
						</div>
					) : null}
				</div>
				<div className="footer-container-content-c flex">
					<div className="footer-container-content-c-no">
						客官点菜吧～
					</div>
				</div>
				<div
					onClick={submit}
					className="footer-container-content-right flex"
				>
					通知大厨
				</div>
			</div>
			<DetailModule
				shoppingCartList={shoppingCartList}
				setIsShowDetail={setIsShowDetail}
				visible={isShowDetail}
				shoppingCartUpdate={shoppingCartUpdate}
				delAllShoppingCart={delAllShoppingCart}
			/>
		</div>
	);
};

const mapStateToProps = (state: IState) => {
	return state;
};

const mapDispatchToProps = (dispatch) => {
	return {
		shoppingCartUpdate: (payload) => {
			dispatch({
				type: Shopping_Cart_Update,
				payload,
			});
		},
		delAllShoppingCart: (payload) => {
			dispatch({
				type: Del_All_Shopping_Cart,
			});
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Footer));
