import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './QuestionPage3.css';
import Logo from '../data/_images/NavBarLogo.png';

function QuestionPage3() {
    return (
        <div className="question-margin">
            <div className="container">
                <img src={Logo} alt="logo" className="logo"  />
                <label className="question-3-title"> 씨앗 커뮤니티에 가입하는 가장 큰 이유는 무엇인가요?</label>
                <label className="question-3-subtitle"> (해당되는 내용은 모두 체크해 주세요. 정보를 토대로 나에게 맞는 그룹과 이벤트가 추천됩니다.) </label>

                <form className="question-form">
                    <div className="question-3-form-group">     
                        <input type="checkbox"/>
                        <span className="form-group-2">
                            특기 계발하기
                        </span>
                    </div>

                    <div className="question-3-form-group">
                        <input type ="checkbox"/>
                        <span className="form-group-2">
                            좋아하는 취미 또는 활동 찾기  
                        </span> 
                    </div> 

                    <div className="question-3-form-group">
                        <input  type ="checkbox"/>
                        <span className="form-group-2">
                            나와 비슷한 사람들 만나기
                        </span>
                    </div>

                    <div className="question-3-form-group">
                        <input type ="checkbox"/>
                        <span className="form-group-2">
                            새로운 장소 경험하기
                         </span>  
                    </div>  

                    <div className="question-3-form-group">
                        <input  type ="checkbox"/>
                        <span className="form-group-2">
                            활동적인 삶을 살기 위해
                        </span>
                    </div>

                    <div className="question-3-form-group">
                        <input type ="checkbox"/>
                        <span className="form-group-2">
                            기타  
                        </span>
                    </div>      
                </form> 
            </div>
            <div className="question-3-button-groups">
                <Link to="/question-2" className="question-3-arrow-button">                      
                    <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47">
                        <path d="M 41.125 16.891 C 41.125 16.485 40.796 16.156 40.391 16.156 L 23.5 16.156 C 23.094 16.156 22.766 15.828 22.766 15.422 L 22.766 10.448 C 22.766 9.814 22.017 9.478 21.543 9.899 L 6.86 22.951 C 6.531 23.243 6.531 23.757 6.86 24.049 L 21.543 37.101 C 22.017 37.522 22.766 37.186 22.766 36.552 L 22.766 31.578 C 22.766 31.172 23.094 30.844 23.5 30.844 L 40.391 30.844 C 40.796 30.844 41.125 30.515 41.125 30.109 Z" fill="rgb(242, 121, 128)"></path>
                    </svg>
                    뒤로가기
                </Link>

                <Link to="/" className="question-2-right-arrow">
                    다음 질문
                    <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47">
                        <path d="M 6.242 16.891 C 6.242 16.485 6.571 16.156 6.977 16.156 L 23.867 16.156 C 24.273 16.156 24.602 15.828 24.602 15.422 L 24.602 10.448 C 24.602 9.814 25.35 9.478 25.824 9.899 L 40.507 22.951 C 40.836 23.243 40.836 23.757 40.507 24.049 L 25.824 37.101 C 25.35 37.522 24.602 37.186 24.602 36.552 L 24.602 31.578 C 24.602 31.172 24.273 30.844 23.867 30.844 L 6.977 30.844 C 6.571 30.844 6.242 30.515 6.242 30.109 Z" fill="rgb(242, 121, 128)"></path>
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export { QuestionPage3 };