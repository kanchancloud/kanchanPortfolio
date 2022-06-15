import React from 'react';
import './contact.css';
import {AiOutlineMail} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import {AiOutlineWhatsApp} from "react-icons/ai";

function Contact(props) {
    return (
        <div>
            <div id="contact" className="ContactWrap">
                <h1>CONTACT</h1>
                <div className="contactItem">
                    <div className="ContactImg">
                        <a href="mailto:kanchansharma@gmail.com" target="_blank"><span className="emailSpan">
                        <AiOutlineMail style={{height: "80px", width: "60%",}} className="icons1"/>
                        <br/>
                        email</span></a><br/>
                    </div>
                    <div className="ContactImg">
                        <a href="https://github.com/kanchansharma " target="_blank"><span className="emailSpan">
                        <AiFillGithub style={{height: "80px", width: "60%",}} className="icons2"/><br/>
                        Github</span></a><br/>
                    </div>
                    <div className="ContactImg">
                        <a href="https://api.whatsapp.com/send?phone=917065121915" target="_blank"><span className="emailSpan">
                        <AiOutlineWhatsApp style={{height: "80px", width: "60%",}} className="icons3 "/><br/>
                        whatsapp</span></a><br/>
                    </div>
                    <div className="ContactImg">
                        <a href="https://www.linkedin.com/in/kanchan-sharma-1a41a1242" target="_blank"><span className="emailSpan">
                        <AiOutlineWhatsApp style={{height: "80px", width: "60%",}} className="icons3 "/><br/>
                        linkedin</span></a><br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;