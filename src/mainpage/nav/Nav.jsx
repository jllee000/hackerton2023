import React from "react";
import Styles from "./nav.css"


function Nav() {
    return(
        <div>
            <form class="search" action="">
                <input className="search_input" type="search" placeholder="Search here..." required />
                <button className="search_btn"type="submit">검색</button>
            </form> 
            <div className="nav_div">
                <nav >
                    <div className="nav_bar">
                        <ul className="nav_ul">
                            <li>
                                <a className="nav_a" href="#">교통</a>
                            </li>
                            <li>
                                <a className="nav_a" href="#">의료</a>
                            </li>
                            <li>
                                <a className="nav_a" href="#">행정</a>
                            </li>
                            <li>
                                <a className="nav_a" href="#">법률</a>
                            </li>
                            <li>
                                <a className="nav_a" href="#">행정</a>
                            </li>
                        </ul>

                    </div>
                </nav>
            
            </div>

        </div>
        
        

    );
}

export default Nav;