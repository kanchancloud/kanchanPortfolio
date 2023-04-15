import React from 'react';
import './Navber.css';
import IntroPage from "../../pages/intro/IntroPage";

function Navber() {
    return (
        <div className={"backgroundImage"}>
            <div className="nav" id="nav1">
                <li className="navLi"><a href="/"><span>HOME</span></a></li>
                <li className="navLi"><a href="#project"><span>PROJECT</span></a></li>
                <li className="navLi"><a href="#portfolioAbout"><span>ABOUT</span></a></li>
                <li className="navLi"><a href="#contact"><span>CONTACT</span></a></li>
            </div>
                <IntroPage/>
        </div>
    );
}

export default Navber;