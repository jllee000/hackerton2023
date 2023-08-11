import React from "react";
import { Navigate, useNavigate } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import styles from "./start.css"; // eslint-disable-line no-unused-vars
import QnaBtn from "../components/QnaBtn";  
import { useState } from "react";
import Qlist from "../components/QList";
import Alist from './../components/AList';


function QuestionPage() {
   
    const [page, setPage]= useState(0);
    const navigate = useNavigate();
    const PreQ = ()  => {
        navigate("/")
    };
    const NextQ = ()  => {
        setPage(page + 1);
        if (page === 3) {
            navigate("/result");
        }
    }
        
    

    return (
        <div className="qna_page">
            <div className="qna_div">
                    <div className="qna_text">
                    <h3>{Qlist[0].Q}</h3>
                    <h5>{page}</h5>
                    </div>

                    
                    <div className="qna_buttons">
                    
                        <QnaBtn>{Alist[0].E[0]}</QnaBtn>
                        <QnaBtn>{Alist[0].I[0]}</QnaBtn>
                        <QnaBtn>{Alist[0].E[1]}</QnaBtn>
                        <QnaBtn>{Alist[0].I[1]}</QnaBtn>
                    </div>
                
                
            </div>
            <h3>{page}/12</h3>
            <button className="set_btn" onClick={PreQ}>뒤로</button> <button className="set_btn" onClick={NextQ}>다음</button>
        </div>
    );
};

export default QuestionPage;