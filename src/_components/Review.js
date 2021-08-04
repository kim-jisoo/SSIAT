import React from 'react';
import './Review.css';

function Review(props) {
    return(
        <div className="review-container">
            <h5 className="review-name">{props.name}</h5>
            <body className="review-body">{props.body}</body>
        </div>
    ) 
}

export default Review;