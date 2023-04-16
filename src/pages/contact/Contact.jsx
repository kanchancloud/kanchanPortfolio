import React from 'react';
import './contact.css';
import {AiOutlineMail} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import {AiOutlineWhatsApp} from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
    return (
            <div id="contact" className="ContactWrap">
                <p>Contact</p>
                <div className="contactItem">
                    <div className="ContactImg">
                        <div className="borderShadowDiv">
                            <a href="mailto:kanchansharma@gmail.com" target="_blank"><span className="emailSpan">
                        <AiOutlineMail style={{height: "60px", width: "100%",}} className="icons1"/>
                        <br/>
                        email</span></a><br/>
                        </div>
                    </div>
                    <div className="ContactImg">
                        <div className="borderShadowDiv">
                        <a href="https://github.com/kanchancloud" target="_blank"><span className="emailSpan">
                        <AiFillGithub style={{height: "60px", width: "100%",}} className="icons2"/><br/>
                        Github</span></a><br/>
                            </div>
                    </div>
                    <div className="ContactImg">
                        <div className="borderShadowDiv">
                        <a href="https://www.linkedin.com/in/kanchan-sharma-1a41a1242" target="_blank"><span className="emailSpan">
                        <FaLinkedin style={{height: "60px", width: "100%",}} className="icons3 "/><br/>
                        linkedin
                        </span>
                        </a>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Contact;