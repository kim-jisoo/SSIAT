import React from 'react';
import './MemberCard.css';
import '../GroupPage/GroupPage.css'
import Avatar from './Avatar';

function MemberCard(props) {
    return(
        <div className="member-container">
            <div className="member-row-1">
                <Avatar styleName="member-avatar"/>
                <text className="member-name">{props.name}</text>
                <text className="member-text">
                    {props.text}
                </text>
            </div>
        </div>
    )
}

export default MemberCard;