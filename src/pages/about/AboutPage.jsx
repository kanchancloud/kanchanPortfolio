import React from 'react';
import "./About.css";

function AboutPage(props) {
    return (
        <div id="portfolioAbout" className="aboutBack">
        <div className="About" >
            <p className="aboutMe">
                About Me
            </p>
            <div className="introWrap">
                    <p>Hello ! My name is <span>Kanchan sharma.</span>
                        Hello! My name is Kanchan Sharma. I’m a self-taught UI/UX Designer with two years of experience. I’m driven by a passion for creating user-friendly and visually appealing designs.
                    </p>
                    <p>
                        I’m proficient in using the following software and technologies :
                    </p>
                    <br/>
            </div>
        </div>
        </div>
    );
}

export default AboutPage;
