import React from 'react';
import './MeetingCard.css';
import {Clock, MapPin, Heart, User} from 'react-feather';
import Button from './Button';

function MeetingCard(props) {
    return(
        <div class="card meeting-container shadow p-3 mb-5 bg-white rounded">
            <div className="meeting-row">
                <Clock color="#F27980"/>
                <text className="meeting-text-1"> {props.time} </text>
            </div>

            <div className="meeting-row"> 
                <MapPin color="#F27980"/>
                <text className="meeting-text-2"> {props.location} </text>
            </div>

            <div className="meeting-row">
                <Heart color="#F27980"/>
                <text className="meeting-text-2"> {props.likes} </text>
            </div>

            <div className="meeting-row-1">   
                <User color="#F27980"/>
                <text className="meeting-text-2"> {props.members} </text>
                <Button  text="참석하기"/>
            </div>
        </div>
    )
}

export default MeetingCard;