import React from 'react';
import AboutPage from "./AboutPage";
import './About.css';
import ImageWrapper from "./ImageWrapper";

function AboutProps(props) {
    return (
        <div className="imgBlock1">
            <AboutPage image="html.png" para="HTML"/>
            <div className={"footerIconContainer"}>
                <ImageWrapper image="html.png" para="HTML"/>
                <ImageWrapper image="CSS3_logo.svg.png" para="CSS"/>
                <ImageWrapper image="JavaScript-Logo.jpg" para="Javascript"/>
                <ImageWrapper image="typescript.png" para="typescript"/>
                <ImageWrapper image="react-1-logo-png-transparent.png" para="react JS"/>
                <ImageWrapper image="redux.png" para="redux"/>
                <ImageWrapper image="Bootstrap_logo.svg.png" para="Bootstrap"/>
            </div>
        </div>
    );
}

export default AboutProps;