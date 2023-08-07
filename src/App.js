import React from "react";
import {Route, Routes} from "react-router-dom";
import Sign from "./sign/Sign";

function App() {

  
    
  return (
    <div class="App">
      <Routes>
        <Route path="/"  element={<Sign/>} exact />
        
      </Routes>
        
    </div>
  );
}

export default App;
