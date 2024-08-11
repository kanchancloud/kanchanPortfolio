import React from 'react';
import AboutPage from "./AboutPage";
import './About.css';
import ImageWrapper from "./ImageWrapper";

function AboutProps(props) {
    return (
        <div className="imgBlock1">
            <AboutPage image="html.png" para="HTML"/>
            <div className={"footerIconContainer"}>
                <ImageWrapper image="1_j3GPPrDmy2CqnxPw-NtWHg.png" para="Figma"/>
                <ImageWrapper image="hjixnzui1nhq3trfcwx8.png" para="Adobe XD"/>
                <ImageWrapper image="photoshop.png" para="Photoshop"/>
                <ImageWrapper image="Adobe_Illustrator_CC_icon.svg.png" para="Illustrator"/>
                <ImageWrapper image="html.png" para="HTML"/>
                <ImageWrapper image="CSS3_logo.svg.png" para="CSS"/>
                <ImageWrapper image="JavaScript-Logo.jpg" para="Javascript"/>
                {/* <ImageWrapper image="c:\Users\nitin\Downloads\png-transparent-canva-design-soft-design-tool-design-tool-logo-design-logo-tool-3d-icon-thumbnail.png" para="typescript"/> */}
                <ImageWrapper image="react-1-logo-png-transparent.png" para="react JS"/>
            </div>
        </div>
    );
}

export default AboutProps;