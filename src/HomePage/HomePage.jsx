import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NewHeaderImage from "../data/_images/New-Header-Image.jpg";
import PaddlingMan from '../data/_videos/paddling-man.mp4';
import ContactImage from "../data/_images/contact.png"
import ContactUsImage from "../data/_images/contact-us.png"
import ButtonCarousel from "../_components/ButtonCarousel";

import { userActions } from '../_actions';

import NavBar from '../_components/NavBar';
import Card from '../_components/Card'
import SamplePicture from '../data/_images/rendered_15.jpg'
import './HomePage.css';

function HomePage() {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

    function handleDeleteUser(id) {
        dispatch(userActions.delete(id));
    }

    return (
        <div className="home-scroll">
            <NavBar />

            <img src={NewHeaderImage} alt="New Header"
                className="new-header-image"/>

            <ButtonCarousel />

            <div className="video-card">
                <div className="video-card-text">
                    <text className="video-card-bold-title">
                        로컬 커뮤니티에 가입하고 새로운 경험을 즐겨보세요!
                    </text>
                    <text className="video-card-body">
                        씨앗 커뮤니티는 관심사 또는 취미가 같은 이웃이 모여 
                        그룹을 만들고Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim 
                        veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis 
                        aute irure dolor in reprehenderit in voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur.
                    </text>
                </div>
                <video className="video-card-video" autoPlay loop muted radius={0}>
                    <source src={PaddlingMan} />
                </video>
            </div>

            <div className='event-cards-container-1'>
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

            <div className='event-cards-container-2'>
                <div className='event-cards-header'>
                    <text className='event-cards-title'> 이벤트 </text>
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
           
            <div className="contact">
                <div>
                    <img src={ContactUsImage} alt="contact-us" className="contact-us-image"/>
                    <button className="contact-button">
                        <text className="contact-button-text">
                        문의하기
                        </text>
                    </button>
                </div>
                <img src={ContactImage} alt="contact" className="contact-image"></img>
            </div>


            <footer className="footer" >
                <div className="footer-text">
                    <div>
                        <text>이용약관 </text>         
                        <text> 개인정보처리방침 </text>  
                        <text> 문의하기</text>       
                    </div>
                    <text>
                        © Copyright  SSIAT Community 2021 (씨앗 커뮤니티)  
                    </text>
                </div>
            </footer>

        </div>
    );
}

export { HomePage };