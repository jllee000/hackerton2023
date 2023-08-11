import React from "react";
import Sidebar from "./side/Sidebar";
import Homediv from "./homediv/Homediv";
import Nav from "./nav/Nav";


function Home() {
    return(
        <div >
            <div className="sidebar">
                 <Sidebar /> 
            </div>
            
            <div>
                <Nav />
                <Homediv />

            </div>
        </div>
        
    );
}

export default Home;