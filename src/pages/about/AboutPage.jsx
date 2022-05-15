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
                        I am a self taught Web Developer.
                        I love creating fascinating stuff and making both static and functional websites.</p>
                    <p>
                        I am comfortable in using following technologies :
                    </p>
                    <br/>
            </div>
        </div>
    );
}

export default AboutPage;