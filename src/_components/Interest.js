import React from 'react';
import './Interest.css'
function Interest(props) {
    return (
        <button type="button" class="btn btn-light interest-button">{props.text}</button>
    )
}

export default Interest;