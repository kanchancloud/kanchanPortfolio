import React from 'react';

function ImageWrapper(props) {
    return (
        <div className="imgBlock">
            <div className={"shadowDiv"}>
                <img src={props.image} alt="img" className="techImg"/>
                <p>{props.para}</p>
            </div>
        </div>
    );
}

export default ImageWrapper;