import React from "react";
import {Route, Routes} from "react-router-dom";
import StartPage from "./pages/StartPage";
import QuestionPage from "./pages/QuestionPage";
import ResultPage from "./pages/ResultPage";
import Login from "./Login";
import Signin from "./pages/Signin";

function App() {

  
    
  return (
    <div class="App">
      <Routes>
        <Route path="/"  element={<StartPage/>} exact />
        <Route path="/qna" element={<QuestionPage/>}  />
        <Route path="/result" element={<ResultPage/>}  />
        <Route path="/signin" element={<Signin/>} />
      </Routes>
        
    </div>
  );
}

export default App;
