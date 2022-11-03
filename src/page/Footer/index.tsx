import React from "react";
import MyIcon from "../Component/Icon";
import "./style.scss";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-container-content flex">
                <div className="footer-container-content-left flex">
                    <MyIcon className="icon-wan" type="icon-wan" />
                    <div className="footer-container-content-left-badge badge">5</div>
                </div>
                <div className="footer-container-content-c flex">
                    <div className="footer-container-content-c-no">客官点菜吧～</div>
                </div>
                <div className="footer-container-content-right flex">通知大厨</div>
            </div>
        </div>
    );
};

export default React.memo(Footer);
