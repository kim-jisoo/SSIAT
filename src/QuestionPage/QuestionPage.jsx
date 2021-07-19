import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './QuestionPage.css';
import Logo from '../data/_images/NavBarLogo.png';

function QuestionPage() {
    return (
        <div className="question-margin">
            <div className="container">
                <img src={Logo} alt="logo" className="logo"  />
                <text className="question-title"> 홍길동 님, 멤버 프로필을 위해 다음 질문에 답해 주시면 감사하겠습니다.</text>

                <form className="question-form">
                        <div className="form-group">
                            <label className="question-subtitle"> 휴대폰 번호 (Mobile Number) </label>
                            <input 
                                className="question-input-box" 
                                placeholder="휴대폰 번호"
                                type="tel"
                            />
                        </div>
                        <div className="form-group">
                            <label className="question-subtitle"> 주소 (Address) </label>
                            <input 
                                className="question-input-box" 
                                placeholder="주소"
                                type="text"
                            />
                        </div>
                        <div className="form-group">
                            <label className="question-subtitle"> 국가 (Country) </label>
                            <input 
                                className="question-input-box" 
                                placeholder="국가"
                                type="text"
                            />
                        </div>

                        <div className="form-group-1">
                            <div className="form-group">
                                <label className="question-subtitle"> 생년월일 (Date of Birth)</label>
                                <input  
                                    className="question-date-of-birth"
                                    type="date" 
                                    placeholder="mm/dd/yyyy"/>
                            </div>
                            <div className="form-group-2">
                                <label className="question-subtitle"> 성별 (Gender) </label>
                                <div className="question-gender">
                                    <input className="question-gender-male" type ="checkbox"/>
                                    남 (Male)
                                    <input className="question-gender-female" type ="checkbox"/>
                                    여 (Female)
                                </div>
                            </div>
                        </div>

                        <Link to="/login" className="arrow-button">
                        다음 질문
                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47">
                            <path d="M 6.242 16.891 C 6.242 16.485 6.571 16.156 6.977 16.156 L 23.867 16.156 C 24.273 16.156 24.602 15.828 24.602 15.422 L 24.602 10.448 C 24.602 9.814 25.35 9.478 25.824 9.899 L 40.507 22.951 C 40.836 23.243 40.836 23.757 40.507 24.049 L 25.824 37.101 C 25.35 37.522 24.602 37.186 24.602 36.552 L 24.602 31.578 C 24.602 31.172 24.273 30.844 23.867 30.844 L 6.977 30.844 C 6.571 30.844 6.242 30.515 6.242 30.109 Z" fill="rgb(242, 121, 128)"></path>
                        </svg>
                        </Link>
                        
                </form>
            </div>
        </div>
    )
}

export { QuestionPage };