import React from "react";
import { styles } from './signin.css';
import { Navigate, useNavigate } from "react-router-dom";

function Signin() {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    }
    const changecolor = () => {
        document.getElementsByClassName("signbtn").style.backgroundColor ="gray";
    
    };

    return(
        <div className="signbox">
            <div className="signment">
                <h1>회원가입</h1>
            </div>
            
            <form className="signform">
                <div>
                    <h5>닉네임</h5>
                </div>
                <div>
                    <input className="inputbox" placeholder="닉네임 입력해주세요"></input>
                </div>

                <div>
                    <h5>ID</h5>
                </div>
                <div>
                    <input className="inputbox" placeholder="아이디를 입력해주세요"></input>
                </div>
                <div>
                    <h5>PW</h5>
                </div>
                <div>
                    <input type="text" className="inputbox" placeholder="비밀번호를 입력해주세요"></input>
                </div>
             


                <div>
                    <input className="signbtn" onClick={changecolor} type="submit" />
                </div>
            </form>
            <div>
                <a className="home" onClick={goHome}>메인홈으로</a>
            </div>
        </div>
    );
}

export default Signin;
