import React from 'react';
import MeinPage from "./MeinPage";
import "./mainPage.css"

function MeinPageProp() {
    return (
        <div id="project">
            <h2 className="Title">Project</h2>
            <MeinPage aboutTitle="movie"
                para="Simple shopping cart with Api integration and Local Storage"
                imgSrc="Screenshot (4).png"
                imageButton="https://mymovie.onrender.com"
                aboutTech="Tech Stack : React axios react-router-dom marital-ui"
                button="https://mymovie.onrender.com" target="_blank" />
            <MeinPage aboutTitle="shopping "
                para="Simple movie with Api integration and Local Storage"
                imgSrc="cart.png"
                imageButton="https://shopping-rgwm.onrender.com"
                aboutTech="Tech Stack : react js, react-router-dom, axios,
                        firebaseAuthentication, bootstrap"
                button="https://shopping-rgwm.onrender.com" target="_blank"/>
        </div>
    );
}

export default MeinPageProp;