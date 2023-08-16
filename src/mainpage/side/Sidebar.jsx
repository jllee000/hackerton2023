import React from "react"; // eslint-disable-next-line
import Styles from "./side.css"; 
import { useNavigate, Navigate } from "react-router-dom";

function Sidebar() {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/")
    }
    const goMain = () => {
        navigate("/main")
    }
    const goIntro = () =>{
        navigate("/intro");
    }
    const goPlus = () =>{
        navigate("/pluspage");
    }
    return(
        <nav class="menu" tabindex="0">
            <div class="smartphone-menu-trigger"></div>
            <header class="avatar">
                <img src="https://cdn-icons-png.flaticon.com/512/1361/1361876.png" />
                <h2>김멋사</h2>
            </header>
            <ul>
                <li tabindex="0" class="icon-all"><span className="text_color" onClick={goMain}>전체</span></li>
                <li tabindex="0" class="icon-alert"><span className="text_color">알림</span></li>
                <li tabindex="0" class="icon-chat"><span className="text_color" onClick={goPlus}>채팅</span></li>
                <li tabindex="0" class="icon-mypage"><span className="text_color">마이페이지</span></li>
                <li tabindex="0" class="icon-star"><span className="text_color">즐겨찾기</span></li>
                
                <li tabindex="0" class="icon-info"><span className="text_color" onClick={goIntro}>사이트 정보</span></li>
                <li tabindex="0" class="icon-out"><span className="text_color" onClick={goHome}>로그아웃</span></li>
                
            </ul>
        </nav>
    );

}


export default Sidebar;