import React, {Component} from 'react';
import './EventCards.css'
import Card from './Card.js'
import SamplePicture from "../data/_images/rendered_15.jpg"
class EventCards extends Component {
    render() {
        return (
            <div className='event-cards-background'>
                <div className='event-cards-header'>
                    <text className='event-cards-title'> 내 주변 그룹 </text>
                    <div>
                    <a className='event-cards-view-all' href='#'> 전체보기 </a>
                            
                    <svg onClick={() => window.location.reload(false)} className='event-cards-arrow' xmlns="http://www.w3.org/2000/svg" width="22.029" height="17.602">
                        <path d="M 0 4.582 C 0 4.323 0.21 4.113 0.469 4.113 L 11.25 4.113 C 11.509 4.113 11.719 3.904 11.719 3.645 L 11.719 0.47 C 11.719 0.065 12.197 -0.149 12.499 0.119 L 21.871 8.45 C 22.081 8.637 22.081 8.965 21.871 9.151 L 12.499 17.482 C 12.197 17.751 11.719 17.536 11.719 17.132 L 11.719 13.957 C 11.719 13.698 11.509 13.488 11.25 13.488 L 0.469 13.488 C 0.21 13.488 0 13.279 0 13.02 Z" fill="rgb(242, 121, 128)"></path>
                        </svg>
                    </div>
                
                </div>
                <div className="event-cards-multiple">
                    <Card image={SamplePicture} subtitle="카테고리 이름" title="그룹 이름" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                    <Card image={SamplePicture} subtitle="카테고리 이름" title="그룹 이름" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                    <Card image={SamplePicture} subtitle="카테고리 이름" title="그룹 이름" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                    <Card image={SamplePicture} subtitle="카테고리 이름" title="그룹 이름" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                </div>
            </div>
        )
    }
}

export default EventCards;