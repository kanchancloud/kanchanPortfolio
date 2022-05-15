import React from 'react';

function ImageWrapper(props) {
    return (
        <div className="imgBlock">
            <img src={props.image} alt="img" className="techImg"/>
            <h6>{props.para}</h6>
        </div>
    );
}

export default ImageWrapper;