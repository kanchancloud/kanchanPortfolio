import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import './Intro.css';

function IntroPage(props) {
    return (
        <div className="para">
            <div className={"para2"}>
                <TypeWriterEffect
                    className="para"
                    textStyle={{
                        fontFamily: 'Red Hat Display',
                        color: 'white',
                        fontWeight: 200,
                        fontSize: '40px',
                        textAlign: 'left',
                        paddingLeft: "10px",
                        white:"100%",
                        lineHeight:"40px",


                    }}
                    startDelay={2000}
                    cursorColor="#3F3D52"
                    multiText={[
                        'create something amazing  together_ ',
                        'design together...',
                        'and developer together ...',

                    ]}
                    multiTextDelay={1200}
                    typeSpeed={30}
                />
            </div>

            <div className="para3">
                <TypeWriterEffect
                    textStyle={{
                        fontFamily: 'Red Hat Display',
                        fontSize: "50px",
                        color: "green",
                        textAlign: 'left',
                        marginLeft: "10px",
                        lineHeight:"50px",
                        white:"100%",
                    }}
                    startDelay={100}
                    cursorColor="black"
                    text="Front-End Developer"
                    typeSpeed={100}
                    // scrollArea={myAppRef}
                />
            </div>
            <div className="name"><h6>KANCHAN
                SHARMA</h6></div>
            <div className="gUqzkk">
                <h1>PORTFOLIO</h1>
            </div>
        </div>
    );
}

export default IntroPage;