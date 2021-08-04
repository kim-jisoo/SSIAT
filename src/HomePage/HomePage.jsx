import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import NewHeaderImage from "../data/_images/New-Header-Image.jpg";
import PaddlingMan from '../data/_videos/paddling-man.mp4';
import ContactImage from "../data/_images/contact.png"
import ContactUsImage from "../data/_images/contact-us.png"
import ButtonCarousel from "../_components/ButtonCarousel";

import { userActions } from '../_actions';

import NavBar from '../_components/NavBar';
import EventCards from '../_components/EventCards';
import CategoryCards from '../_components/CategoryCards';
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

            <div className="event-background">
                <EventCards/>
            </div>

            <div> 
                <CategoryCards/>
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

            {/* <h3>All registered users:</h3>
            {users.loading && <em>Loading users...</em>}
            {users.error && <span className="text-danger">ERROR: {users.error}</span>}
            {users.items &&
                <ul>
                    {users.items.map((user, index) =>
                        <li key={user.id}>
                            {user.firstName + ' ' + user.lastName}
                            {
                                user.deleting ? <em> - Deleting...</em>
                                : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                : <span> - <a onClick={() => handleDeleteUser(user.id)} className="text-primary">Delete</a></span>
                            }
                        </li>
                    )}
                </ul>
            }
            <p>
                <Link to="/login">Logout</Link>
            </p> */}
        </div>
    );
}

export { HomePage };