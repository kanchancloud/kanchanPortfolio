import React from 'react';
import MeinPage from "./MeinPage";
import "./mainPage.css"

function MeinPageProp() {
    return (
        <div id="project">
            <p className="Title">Project</p>
            <div className={"uiUx"}>
                <p className="uiHead">Some UI/UX design </p>
                <div className="uiImage">
                    <div>
                        <a href="https://www.figma.com/proto/cbbflSi0ngL1gpRfXtWOno/nitin-portfolio?page-id=0%3A1&node-id=164-971&viewport=-27%2C-1268%2C0.48&scaling=scale-down&starting-point-node-id=60%3A35" target="_blank">
                            <img src="homepage.png" alt={"img"} />
                            <p>Portfolio design in figma</p>
                        </a>
                    </div>
                    <div>
                        <img src="Screenshot 2023-04-16 001926.png" alt={"img"} />
                        <p>Landing Page Design in figma</p>
                    </div>
                </div>
            </div>
            <div className="graphic">
            <div className={"uiUxDesign"}>
                <p className="uiHead">Illustrator Personal work</p>
                <div className="illuImage">
                    <div  className="illuDiv">
                        <img src="flower transform-ai.jpg" alt={"img"} />
                        <p>Flower</p>
                    </div>
                    <div  className="illuDiv">
                        <img src="mandala painting illustrator.jpg" alt={"img"} />
                        <p>Mandala painting</p>
                    </div>
                    <div  className="illuDiv">
                        <img src="mango 3d.jpg2.jpg" alt={"img"} />
                        <p>3D mango</p>
                    </div>
                    <div  className="illuDiv">
                        <img src="New Project.jpg" alt={"img"} />
                        <p>logo Design</p>
                    </div>
                </div>
            </div>
            <div className={"PhotoshopDesign"}>
                <p className="uiHead">Photoshop Personal work</p>
                <div className="PhotoshopImage">
                    <div  className="illuDiv">
                        <img src="photo-1566669086984-077347c1f4bb.jpg" alt={"img"} />
                        <p>Glow Effect</p>
                    </div>
                    {/*<div  className="illuDiv">*/}
                    {/*    <img src="TwoElephants.jpg" alt={"img"} />*/}
                    {/*    <p>Glow Effect </p>*/}
                    {/*</div>*/}
                    <div  className="illuDiv">
                        <img src="cartoon.png" alt={"img"} />
                        <p>cartoon GIF</p>
                    </div>
                    <div  className="illuDiv">
                        <img src="fireApple.jpg" alt={"img"} />
                        <p>fire Effect</p>
                    </div>
                    <div  className="illuDiv">
                        <img src="hair image.png" alt={"img"} />
                        <p>Double exposure Effect</p>
                    </div>
                    <div  className="illuDiv">
                        <img src="girl face.png" alt={"img"} />
                        <p>Text portrait Effect</p>
                    </div>
                </div>
            </div>
            </div>
            <div className={"jdklfsj"}>
                <p className="uiHead"> React Js Personal Project</p>
            <MeinPage aboutTitle="Movie"
                para="Simple shopping cart with Api integration and Local Storage"
                imgSrc="Screenshot (4).png"
                imageButton="https://mymovie.onrender.com"
                aboutTech="Tech Stack : React axios react-router-dom marital-ui"
                button="https://mymovie.onrender.com" target="_blank" />
            <MeinPage aboutTitle="shopping "
                para="Simple movie with Api integration and Local Storage"
                imgSrc="cart.png"
                imageButton="https://shopping-rgwm.onrender.com"
                aboutTech="Tech Stack : react js, redux, react-router-dom, axios,
                        firebaseAuthentication, bootstrap"
                button="https://shopping-rgwm.onrender.com"/>
            </div>
        </div>
    );
}

export default MeinPageProp;