import React from 'react';
import './Block.css'
function Block(props) {
    return (
        <div className={"block-group-1" + (props.styleName || "")}>
            <h2 className="block-title">{props.title}</h2>
            <h3 className="block-value">{props.value}</h3>
        </div>
    )
}

export default Block;