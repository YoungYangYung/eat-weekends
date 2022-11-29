import React, { useState } from "react";
import { connect } from "react-redux";
import { Toast } from 'zarm';
import { isValidArray } from "../../utils";
import MyIcon from "../Component/Icon";
import { IState } from "../type";
import DetailModule from "./DetailModule";
import "./style.scss";

interface IProps extends IState {
	isShowClass?: boolean;
}

const Footer = ({ shoppingCartList, classList }: IProps) => {
	const [isShowDetail, setIsShowDetail] = useState(false);

	return (
		<div className="footer-container">
			<div className="footer-container-content flex">
				<div
					onClick={() => {
                        if(!isValidArray(shoppingCartList)) {
                            Toast.show({
                                content: '还没点菜呢～',
                                stayTime: 3000,
                            })
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
				<div className="footer-container-content-right flex">
					通知大厨
				</div>
			</div>
			<DetailModule
				shoppingCartList={shoppingCartList}
				setIsShowDetail={setIsShowDetail}
				visible={isShowDetail}
			/>
		</div>
	);
};

const mapStateToProps = (state: IState) => {
	return state;
};

export default connect(mapStateToProps)(React.memo(Footer));
