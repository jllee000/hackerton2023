import React, { useState } from "react";
import styles from "./Login.css"; // eslint-disable-next-line
import { useEffect } from "react";
import axios from "axios";


// 이 밑에 사용자 정보와 일치하지 않으면 로그인 안됨 
// 저장된 사용자 아이디,비번 일치해야 로그인가능(이건 나중에 데이터셋에 넣어서 관리)

const User = {
    id: 'skku1',
    pw: 'skku1'
  }
  

function Login() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const [idValid, setIdValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);
    const [mypage,setMyPage] = useState(true);


    useEffect(() => {
        if(idValid && pwValid) {
            if(id === User.id && pw === User.pw) {
                setMyPage(false);
              }
          return;
        }
        setMyPage(true);
      }, [idValid, pwValid]);

    useEffect(() => {
      if(idValid && pwValid) {
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    }, [idValid, pwValid]);

    const handleid = (e) => {
      setId(e.target.value);
      const regex =
      /^[a-z]+[a-z0-9]{3,19}$/g;
      if (regex.test(e.target.value)) {
        setIdValid(true);
      } else {
        setIdValid(false);
      }
    };
    const handlePw = (e) => {
      setPw(e.target.value);
      const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{5,20}$/;
      if (regex.test(e.target.value)) {
        setPwValid(true);
      } else {
        setPwValid(false);
      }
    };
     // 로그인 요청하기 , 서버주소로 변경 작업 필요 ! 
    const onClickConfirmButton = () => {
      axios.post('/api/login', { id, pw })
      .then((response) => {
        console.log(response.data); 
      })
      .catch((error) => {
        console.log(error,"오류");
      });

      if(id === User.id && pw === User.pw) {
        alert('로그인에 성공했습니다.')
      } else {
        alert("등록되지 않은 회원입니다.");
      }
    }

    return (
      <div className="page">
        <div className="titleWrap">
          LOGIN
        </div>

        <div className="contentWrap">
          <div className="inputTitle">아이디</div>
          <div
            className="inputWrap"
          >
            <input
              className="input"
              type="text"
              placeholder="아이디를 입력하세요"
              value={id}
              onChange={handleid}
            />
          </div>
          <div className="errorMessageWrap">
            {!idValid && id.length > 0 && (
              <div>5자 이상의 아이디를 입력해주세요.</div>
            )}
          </div>

          <div  className="inputTitle">
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              className="input"
              type="password"
              placeholder="영문, 숫자 포함 5자 이상"
              value={pw}
              onChange={handlePw}
            />
          </div>
          <div className="errorMessageWrap">
            {!pwValid && pw.length > 0 && (
              <div>영문, 숫자 포함 5자 이상 입력해주세요.</div>
            )}
          </div>
        </div>

        <div>
          <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">
            확인
          </button>
          
        </div>
        <div>
        <button className="mypageBtn" disabled={mypage}>마이페이지</button>
        </div>
      </div>
    );
}

export default Login;