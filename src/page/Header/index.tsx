import React, { useState } from "react";
import { NavBar, Modal, Button } from "zarm";
import { isWeiXin } from "../../utils";
import MyIcon from "../Component/Icon";
import { useNavigate } from 'react-router-dom';
import "./style.scss";

const Header = () => {
	const [isShow, setIsShow] = useState(false);
    const navigate = useNavigate();

	return (
		<div className="header-content">
			<NavBar
				left={
					<MyIcon
						onClick={() => {
							setIsShow(true);
						}}
						className="icon"
						type="icon-wen-hao"
					/>
				}
				title={isWeiXin() ? '' : '周末吃什么'}
				right={
					<MyIcon onClick={()=>{navigate('/eat-weekends/search')}} className="search-icon" type="icon-sousuoleimu" />
				}
			/>

			<Modal
				maskClosable
				animationType="door"
				visible={isShow}
				onCancel={() => {
					setIsShow(false);
				}}
			>
				<div className="modal-content flex">
					<p>下方点菜～</p>
					<p className="msx-5">点击通知大厨后，会发邮件通知大厨。后面就交给大厨吧～</p>
					<Button theme="primary" size="xs" onClick={()=>{setIsShow(false)}}>妥妥的</Button>
				</div>
			</Modal>
		</div>
	);
};

export default React.memo(Header);
