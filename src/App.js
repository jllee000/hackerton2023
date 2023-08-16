import React from 'react'; 
import {Routes,Route} from 'react-router-dom';
import Login from './login/Login';
import Sign from './sign/sign';
import Home from './mainpage/Home';
import SimplePage from './simplepage/SimplePage';
import Pluspage from './pluspage/pluspage';
import MissionPage from './missonpage/MissionPage';
import Intro from './intro/Intro';
function App() { 
    return(
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Sign />} />
                <Route path="/main" element = {<Home />} />
                <Route path ="/missonpage" element = {<MissionPage/>}/>
                <Route path ="/pluspage" element = { <Pluspage/>} />    
                <Route path ="/simplepage" element = { <SimplePage/>} />
                <Route path ="/intro" element = { <Intro/>} />
            </Routes>
        </div>
);
}

export default App;