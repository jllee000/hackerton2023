import React from "react";
import Sidebar from "./side/Sidebar";
import Homediv from "./homediv/Homediv";

function Home() {
    return(
        <div >
            <div className="sidebar">
                 <Sidebar /> 
            </div>
            
            <div>
                <Homediv />

            </div>
        </div>
        
    );
}

export default Home;