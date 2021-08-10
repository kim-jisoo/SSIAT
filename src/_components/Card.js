import React from 'react';
import './Card.css'

//need to create image url prop for event card so we can import different photos from API
function Card(props) {
  return (
    // <div className='event-card'>
    //     <img src={props.image} alt="sample" className={"event-card-image" + (props.styleName || "")} ></img>
    //     <div className='event-card-texts'>
    //       <text className='event-card-category-name'> {props.subtitle} </text>
    //       <text className='event-card-group-name'> {props.title} </text>
    //       <text className='event-card-body'> {props.body} </text>
    //     </div>
    // </div>

    <div class="card" style={{width: "20rem",}}>
    <img class="card-img-top" src={props.image} alt="Card image cap"/>
    <div class="card-body">
        <h5 class="card-title">{props.subtitle}</h5>
        <h6 class="card-title card-title-1"> {props.title} </h6>
        <p class="card-text ">{props.body}</p>
        
    </div>
</div>
  )
}

export default Card;