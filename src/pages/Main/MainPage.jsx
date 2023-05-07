import React from 'react';
import './mainPage.css';

function MainPage(props) {
    return (
        <div>
            <div className="portFolio">
                <div className="portImage">
                    <div className="imgDiv">
                        <img src={props.imgSrc} alt="img" className="img" />
                        {/*<a href={props.imageButton} target="_blank" className="btn">watch</a>*/}
                    </div>
                    <div className="MovieAbout">
                        <h3 className="aboutTitle">{props.aboutTitle}</h3>
                        <p className="paraI">{props.para}</p>
                        <p className="aboutTech">{props.aboutTech}</p>
                        <div class="btnLinkWrapper">
                            <a href={props.button} target="_blank" className="LinkButton">watch</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;