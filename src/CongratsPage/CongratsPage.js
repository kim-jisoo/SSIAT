import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Background from '../data/_images/congrats.png';
import './CongratsPage.css'

// const [error, setError] = useState(null);
// const [isLoaded, setIsLoaded] = useState(false);
// const [items, setItems] = useState([]);

// useEffect(() => {
//     fetch("https://api.example.com/items")
//     .then(res => res.json())
//     .then(
//       (result) => {
//         setIsLoaded(true);
//         setItems(result);
//       },
//       // Note: it's important to handle errors here
//       // instead of a catch() block so that we don't swallow
//       // exceptions from actual bugs in components.
//       (error) => {
//         setIsLoaded(true);
//         setError(error);
//       }
//     )
// }, [])

function CongratsPage() {
    return (
        <div className="congrats-container" style={{ backgroundImage: `url(${Background})`, height: '1080px'}}>
            <h1 className="congrats-title"> Congratulations! </h1>
            {/* 
                <h2 className="congrats-name"> {user.name} 님, </h2>
            */}
            <h2 className="congrats-name"> 홍길동 님,</h2>
            <h2 className="congrats-line" > 씨드그룹 가입을 축하합니다! </h2>
            <Link to="/question-1" className="btn congrats-button" > 시작하기</Link>
        </div>
    )
}

export { CongratsPage };