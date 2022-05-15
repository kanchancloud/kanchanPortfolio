import React from 'react';
import './Navber.css';


function Navber() {

    return (
        <div>
            <div className="nav" id="nav1">
                <li className="navLi"><a href="#"><span>HOME</span></a></li>
                <li className="navLi"><a href="#"><span>PROJECT</span></a></li>
                <li className="navLi"><a href="#"><span>ABOUT</span></a></li>
                <li className="navLi"><a href="#"><span>CONTACT</span></a></li>

            </div>
        </div>
    );
}


export default Navber;