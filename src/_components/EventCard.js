import React, {Component} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import SamplePicture from "../data/_images/rendered_15.jpg"
import './EventCard.css'

//need to create image url prop for event card so we can import different photos from API
class EventCard extends Component {
    render() {
      return (
        <div className='event-card'>
            <img src={SamplePicture} alt="sample" className='event-card-image'></img>
            <div className='event-card-texts'>
             <text className='event-card-category-name'> 카테고리 이름 </text>
             <text className='event-card-group-name'> 그룹 이름 </text>
             <text className='event-card-body'> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</text>
            </div>
        </div>
      )
    }
}

export default EventCard;