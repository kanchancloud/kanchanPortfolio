import React from 'react';

function ImageWrapper(props) {
    return (
        <div className="imgBlock">
            <img src={props.image} alt="img" className="techImg"/>
            <p>{props.para}</p>
        </div>
    );
}

export default ImageWrapper;