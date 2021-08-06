import React, {Component} from 'react';
import sojin from "../data/_images/sojin.png";
import "./Avatar.css"

function Avatar(props) {
    return (
        <img alt="profileIcon"  
            src={sojin} 
            className={ (props.styleName ? props.styleName : "avatar-bubble")}
        /> 
    )
}

export default Avatar;