import React from 'react';
import './mainPage.css';

function MeinPage(props) {
    return (
        <div>
            <div className="portFolio">
                <div className="portImage">
                    <div className="imgDiv">
                        <img src={props.imgSrc} alt="img" className="img"/>
                        <a href="#" className="btn">watch</a>
                    </div>
                    <div className="MovieAbout">
                        <h3 className="aboutTitle">{props.aboutTitle}</h3>
                        <p className="paraI">{props.para}</p>
                        <p className="aboutTech">{props.aboutTech}</p>
                        <a href="http://localhost:3000http://192.168.0.10:3000" className="LinkButton">watch</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MeinPage;