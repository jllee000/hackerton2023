import React from "react";
import {Navigate, useNavigate} from "react-router-dom"; // eslint-disable-line no-unused-vars
import styles from "./start.css" // eslint-disable-line no-unused-vars
import { useState } from "react";
import Login from "../Login";

function StartPage() {
    const {mypage, setMypage} = useState(0);
    const navigate = useNavigate();
    const goNext = () => {
        navigate('/qna');
    }
    const goMypage=() => {
        navigate('/mypage');
    }
    const goSignin =() => {
        navigate('/signin')
    }

    return (
        <div>
            
            
            <div className="start_box">
            
                    <div >
                    <img className="logo_first" alt="logo" src="img/logo_rsd.png" />
                        <h4 className="notice_text">
                        당신의 성향을 확인하기 위해 <br></br>간단한 테스트를 보냈습니다.
                        <br></br>바로 확인해보세요</h4>
                        <button className="start_btn set_btn" type="button" onClick={goNext}>START</button>
                    </div>
                    
                <div className="notice">
                    {<Login/>}
                    <h5 className="nick_text">로그인 없이 바로 입장가능한 서비스입니다.<br></br><br></br>회원가입 후 로그인 시, <br></br>마이페이지를 통해<br></br>내 이전 결과들을 볼 수 있습니다.</h5>
                    <a className="signinBtn" onClick={goSignin}>회원가입</a>
                </div>
                
                
            </div>
            
            
        </div>
    );
}

export default StartPage;