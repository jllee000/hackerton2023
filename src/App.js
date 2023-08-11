import React from 'react'; 
import {Routes,Route} from 'react-router-dom';
import Login from './login/Login';
import Sign from './sign/sign';
import Home from './mainpage/Home';

function App() { 
    return(
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Sign />} />
                <Route path="/main" element = {<Home />} />
            </Routes>
        </div>
);
}

export default App;