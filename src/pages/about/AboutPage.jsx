import React from 'react';
import "./About.css";
import ImageWrapper from "./ImageWrapper";

function AboutPage(props) {
    return (
        <div className="About" id="portfolioAbout">
            <h1 className="aboutMe">
                ABOUT ME
            </h1>
            <div className="introWrap">
                    <p>Hello ! My name is kanchan sharma.
                        I am a self taught UI/UX Designer.
                        I am motivation to create something user-friendly and beautiful.
                    </p>
                    <p>
                        I am comfortable using this software's and technologies :
                    </p>
                    <br/>
            </div>
        </div>
    );
}

export default AboutPage;