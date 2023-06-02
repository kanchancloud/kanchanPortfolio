import React from 'react';
import MainPage from "./MainPage";
import "./mainPage.css"

function MeinPageProp() {
    return (
        <div id="project">
            <p className="Title">Project</p>
            <div className={"uiUx"}>
                <p className="uiHead">Some UI/UX design </p>
                <div className="uiImage">
                    <div className={"bigDiv"}>
                    <div>
                        <a href="https://www.figma.com/proto/tEzd2BgebkxBxkgCDuc5gI/Untitled?page-id=0%3A1&type=design&node-id=108-651&viewport=447%2C-550%2C0.16&scaling=scale-down-width&starting-point-node-id=82%3A20" target="_blank">
                            <img src="portfolio2.png" alt={"img"} className={"bigImage"}/>
                            <p>Portfolio design in figma</p>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.figma.com/proto/5Z8AjOuqRiyEytpwQd2g8r/Untitled?page-id=0%3A1&type=design&node-id=8-46&viewport=194%2C136%2C0.36&scaling=scale-down-width&starting-point-node-id=63%3A6" target="_blank">
                            <img src="Screenshot 2023-05-28 173613.png" alt={"img"} className={"bigImage"}/>
                            <p>Design in Figma</p>
                        </a>
                    </div>
                    <div>
                        <a href="New Project.png" target="_blank">
                            <img src="Screenshot 2023-04-16 001926.png" alt={"img"}  className={"bigImage"}/>
                            <p>Landing Page Design in figma</p>
                        </a>
                    </div>
                    </div>
                    <div className={"bigDiv1"}>
                        <a href="https://www.figma.com/proto/VbQJUicxTdGGi1Yr26BMWm/game?page-id=0%3A1&type=design&node-id=1-3&viewport=53%2C190%2C0.2&scaling=min-zoom&starting-point-node-id=5%3A74" target="_blank">
                            <img src="Screenshot 2023-06-01 202942.png" alt={"img"} className={"small"}/>
                            <p>Design game UI in Figma</p>
                        </a>
                    <a href="https://www.figma.com/proto/hLTxXvu9Et0gJp2o8N0B73/Untitled?page-id=0%3A1&type=design&node-id=1-3&viewport=355%2C169%2C0.24&scaling=min-zoom&starting-point-node-id=1%3A3&show-proto-sidebar=1" target="_blank">
                        <img src="Screenshot 2023-05-29 191440.png" alt={"img"} className={"smallCash"}/>
                        <p>Recreate CashMonk app in figma</p>
                    </a>
                   </div>
                </div>
            </div>
            <div className="graphic">
            <div className={"uiUxDesign"}>
                <p className="uiHead">Illustrator Personal work</p>
                <div className="illuImage">
                    <div  className="illuDiv">
                        <a href="flower transform.ai" target="_blank">
                        <img src="flower transform-ai.jpg" alt={"img"} />
                        <p>Flower</p>
                        </a>
                    </div>
                    <div  className="illuDiv">
                        <a href="mandala painting illustrator.ai" target="_blank">
                        <img src="mandala painting illustrator.jpg" alt={"img"} />
                        <p>Mandala Painting</p>
                        </a>
                    </div>
                    <div  className="illuDiv">
                        <a href="mango 3d.ai" target="_blank">
                        <img src="mango 3d.jpg2.jpg" alt={"img"} />
                        <p>3D Mango</p>
                        </a>
                    </div>
                    <div  className="illuDiv">
                        <a href="New Project.jpg" target="_blank">
                        <img src="New Project.jpg" alt={"img"} />
                        <p>Logo Design</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className={"PhotoshopDesign"}>
                <p className="uiHead">Photoshop Personal work</p>
                <div className="PhotoshopImage">
                    <div  className="illuDiv">
                        <a href="photo-1566669086984-077347c1f4bb.psd" target="_blank">
                        <img src="photo-1566669086984-077347c1f4bb.jpg" alt={"img"} />
                        <p>Glow Effect</p>
                        </a>
                    </div>
                    {/*<div  className="illuDiv">*/}
                    {/*    <img src="TwoElephants.jpg" alt={"img"} />*/}
                    {/*    <p>Glow Effect </p>*/}
                    {/*</div>*/}
                    <div  className="illuDiv">
                        <a href="cartoon gif-1.psd" target="_blank">
                        <img src="cartoon.png" alt={"img"} />
                        <p>Cartoon GIF</p>
                        </a>
                    </div>
                    <div  className="illuDiv">
                        <a href="fireApple.psd" target="_blank">
                        <img src="fireApple.jpg" alt={"img"} />
                        <p>Fire Effect</p>
                        </a>
                    </div>
                    <div  className="illuDiv">
                        <a href="girl hair image.psd" target="_blank">
                        <img src="hair image.png" alt={"img"} />
                        <p>Double exposure Effect</p>
                        </a>
                    </div>
                    <div  className="illuDiv">
                        <a href="water effect1.psd" target="_blank">
                        <img src="water effect1.jpg" alt={"img"} />
                        <p>Text portrait Effect</p>
                        </a>
                    </div>
                </div>
            </div>
            </div>
            <div className={"jdklfsj"}>
                <p className="uiHead"> React Js Personal Project</p>
            <MainPage aboutTitle="Movie"
                      para="Simple shopping cart with Api integration and Local Storage"
                      imgSrc="Screenshot (4).png"
                      imageButton="https://mymovie.onrender.com"
                      aboutTech="Tech Stack : React axios react-router-dom marital-ui"
                      button="https://mymovie.onrender.com" target="_blank" />
            <MainPage aboutTitle="shopping "
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
