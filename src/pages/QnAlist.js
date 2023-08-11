import React from "react";
import { useState } from "react";

function QnAlist() {
    const qnaList = [
        {q:['무도회장으로 도착한 당신. 저기 분수대 앞에 동물들이 모여서 다같이 인사를 나누고 있다.이 때 당신의 행동은?'], 
        a:[{type:'E', text:'이 무도회장의 주최자인 호랑이한테 직접 가서 말을 걸어봐야겠다'}, 
        {type:'I', text:'초대받지 않고 들어왔으니까, 일단은 구석에서 숨어있어야겠다'}]},

        {q:['질문'], 
        a:[{type:'E', text:'답변'}, 
        {type:'I', text:'답변'}]},

        {q:['질문'], 
        a:[{type:'E', text:'답변'}, 
        {type:'I', text:'답변'}]},

        {q:['질문'], 
        a:[{type:'E', text:'답변'}, 
        {type:'I', text:'답변'}]},

    ]

    const [MbtiList, setMbtiList] = useState([
        {name:'I',count:0}, {name:'E',count:0},
        {name:'S',count:0}, {name:'N',count:0},
        {name:'T',count:0}, {name:'F',count:0},
        {name:'P',count:0}, {name:'J',count:0},
    ]

    )

}

export default QnAlist;