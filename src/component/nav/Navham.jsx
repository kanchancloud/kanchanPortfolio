// import React, {useState} from 'react';
// import {FaAlignJustify, FaRegTimesCircle} from "react-icons/fa";
// import Navbar from "./Navber";
// import './Navber.css';
//
// function Navham() {
//     const [navopen, setNavOpen] = useState(false)
//     const hamBurgerIcon = <FaAlignJustify className={"hamburger"} size="40px" color="white"
//                                           onClick={() => setNavOpen(!navopen)}/>
//
//     const closeIcon = <FaRegTimesCircle clasaName={"closeIcon"} size="40px" color="white"
//                                         onClick={() => setNavOpen(!navopen)}/>
//
//     const closeHamBurger=()=>setNavOpen(false)
//
//     return (
//         <div>
//
//             {/*<a href="javascript:void(0);" className="icon">*/}
//             {/*    /!*<i className="fa fa-bars"></i>*!/*/}
//
//             {/*</a>*/}
//             {navopen ? closeIcon : hamBurgerIcon}
//             {navopen && <Navbar isMoblie={true} closeHamBurger={closeHamBurger} />}
//
//         </div>
//     );
// }
//
// export default Navham;

var docWidth = document.documentElement.offsetWidth;


[].forEach.call(

    document.querySelectorAll('*'),

    function(el) {

        if (el.offsetWidth > docWidth) {

            console.log(el);

        }

    });