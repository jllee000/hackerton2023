import React from "react";
import Styles from "./side.css"; // eslint-disable-next-line

function Sidebar() {
    return(
        <nav class="menu" tabindex="0">
            <div class="smartphone-menu-trigger"></div>
            <header class="avatar">
                <img src="https://cdn-icons-png.flaticon.com/512/1361/1361876.png" />
                <h2>김아무개</h2>
            </header>
            <ul>
                <li tabindex="0" class="icon-all"><span className="text_color">전체</span></li>
                <li tabindex="0" class="icon-alert"><span className="text_color">알림</span></li>
                <li tabindex="0" class="icon-chat"><span className="text_color">채팅</span></li>
                <li tabindex="0" class="icon-mypage"><span className="text_color">마이페이지</span></li>
                <li tabindex="0" class="icon-info"><span className="text_color">사이트 정보</span></li>
            </ul>
        </nav>
    );

}


export default Sidebar;