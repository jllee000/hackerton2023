// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Login.css';
import { Navigate, useNavigate } from "react-router-dom";

function Login () {
  const navigate = useNavigate();
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 로그인 요청하기 , 서버주소로 변경 작업 필요 ! ,
    axios.post('/api/login', { email, password })
      .then((response) => {
        console.log(response.data); 
      })
      .catch((error) => {
        console.log(error,"오류");
      });
      
      alert("로그인되었습니다")
  };

  const goMain=() => {
    navigate("/main");
  }

  return (
    <div className='startpage'>
      <div className='logo'>
        <img className="logo_img" alt='logo' src='./components/logo.png'/>

      </div>
      <div className = "container">
      <h1>LOGIN</h1>
      <form>
        <div className='inputbox'>
          <label className='inputbox'>아이디</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='inputbox'>
          <label className='inputbox'>비밀번호</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className='login' type="button" onClick={handleLogin}>로그인</button>
        <p className='inputbox'>회원가입 시 더 많은 혜택이 있어요 <Link className='inputbox' to = "/signup">회원가입</Link></p>
      </form>
      <div>
      <button className='nologin' onClick={goMain}>로그인 없이 입장</button>
    </div>
    </div>
    

    </div>
    
  );
};

export default Login;
