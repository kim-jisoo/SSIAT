import React from 'react';
import { Link } from 'react-router-dom';

import './ConfirmPage.css';
import SignUp from '../data/_images/sign-up.png';

function ConfirmPage() {
    return (
        <div className="confirm-page">
            <div className="confirm-left-panel">
               <h1 className="confirm-title"> 계정 이메일 인증 확인 </h1>
                <div className="confirm-text-group-1">
                    <text className="confirm-text-area-1"> 
                            싸인업 하실 때 입력하신 메일 주소로 인증 메일이 발송되었습니다. 
                    </text>
                </div>
                <div>
                    <text className="confirm-text-area-1">
                        받으신 이메일에 포함되어 있는 
                            "이메일 확인" 버튼을 클릭하시면 인증이 완료됩니다. 
                    </text>
                </div>

                <div className="confirm-text-group-2">
                    <text className="confrim-text-area-2">
                    * 이메일이 도착하지 않을 경우 휴지통이나 스팸 메일함을 함께 확인해 주세요.
                    </text>
                    
                </div>
                <div>
                    <text className="confrim-text-area-2">
                        ** 만약, 휴지통이나 스팸 메일함에도 없는 경우 info@ssiatcommunity.com 으로     
                        연락주시면 안내해 드리겠습니다.
                    </text>
                </div>

                <div className="form-group ">
                    <button className="btn confirm-button">
                        인증완료
                    </button>
                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58">
                        <path d="M 50.75 20.844 C 50.75 20.343 50.344 19.938 49.844 19.938 L 29 19.938 C 28.499 19.938 28.094 19.532 28.094 19.031 L 28.094 12.893 C 28.094 12.111 27.17 11.696 26.585 12.216 L 8.465 28.323 C 8.06 28.683 8.06 29.317 8.465 29.677 L 26.585 45.784 C 27.17 46.304 28.094 45.889 28.094 45.107 L 28.094 38.969 C 28.094 38.468 28.499 38.063 29 38.063 L 49.844 38.063 C 50.344 38.063 50.75 37.657 50.75 37.156 Z" fill="rgb(242, 121, 128)"></path>
                    </svg>
                    <text> 이전 페이지로 이동 </text>
                    <button className="btn confirm-button-2">
                       
                        <Link to="/" className="confirm-login-button" > 홈페이지</Link>
                    </button>
                </div>
            </div>

            <div className="confirm-right-panel">
                <img src={SignUp} alt="signup image" className='confirm-image' />

            </div>

        </div>
    );
}

export { ConfirmPage };