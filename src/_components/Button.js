import React, {useState} from 'react';
import './Button.css';

function Button(props) {
    return(
        <button className={ "btn-1 " + ( props.styleName || "") }>
            {props.text}
        </button>
    )
}
export default Button;