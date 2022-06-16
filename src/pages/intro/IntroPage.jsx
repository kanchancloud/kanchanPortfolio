import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import './Intro.css';

function IntroPage(props) {
    return (
        <div className="para">
            {/*<div className={"typeWritterWrapper"}>*/}
                <div className={"para2"}>
                    <TypeWriterEffect
                        className="para"
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
                        startDelay={100}
                        cursorColor="black"
                        text="Front-End Developer"
                        typeSpeed={100}
                        // scrollArea={myAppRef}
                    />
                </div>
                <div className="name"><span>KANCHAN SHARMA</span></div>
            {/*</div>*/}

            <div className="gUqzkk">
                <h1>PORTFOLIO</h1>
            </div>
        </div>
    );
}

export default IntroPage;