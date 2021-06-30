import React, {Component} from 'react';
import sojin from "../images/sojin.png";
import "./Avatar.css"

class Avatar extends Component {
    render () {
        return (
            <img alt="sojin"  
                src={sojin} 
                className="avatar-bubble"
            /> 
        )
    }
}

export default Avatar;