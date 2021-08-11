import React from 'react';
import Avatar from './Avatar';
import './ContactCard.css'

function ContactCard(props) {
    return (
        <div className={"contact-container" + (props.styleName || "")}>
            <Avatar styleName="contact-avatar"/>
            <div className="contact-col-1">
                <div className="contact-row-1">      
                    {props.name && <text className="contact-name">{props.name}</text>}
                    {props.date && <text className="contact-date"> {props.date} </text>}      
                </div>
                {props.groupName && <text className="contact-group-name"> {props.groupName} </text>}
            </div>
        </div>
      
    )
}

export default ContactCard;