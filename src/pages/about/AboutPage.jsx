import React from 'react';
import "./About.css";
import ImageWrapper from "./ImageWrapper";

function AboutPage(props) {
    return (
        <div className="About" id="portfolioAbout">
            <p className="aboutMe">
                About Me
            </p>
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