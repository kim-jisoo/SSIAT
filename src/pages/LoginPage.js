import React from 'react';
import LoginImage from '../images/login-2.png';
import Logo from '../images/NavBarLogo.png';
import GoogleIcon from '../images/google-icon.png';
import Login from '../components/Login';
import './LoginPage.css';

function LoginPage () {
    return( 
        <div className="login-page">
            <div className="login-left-panel">
                <div className='login-left-panel-2'>
                    <text className="login-title">씨앗 커뮤니티에 오신 것을 환영합니다!</text>
                    <button className='google-button'>
                        <img src={GoogleIcon} className='google-icon' alt='google'/>
                        <text className='google-text'>구글 어카운트로 로그인</text>
                    </button>
                    
                    <text>이메일 주소</text>
                    <Login />
                    
                </div>
            </div>
            <div className="login-right-panel">
                <img src={Logo} alt="logo" className='login-logo' />
                <img src={LoginImage} alt="login" className='login-image'/>
            </div>
          
        </div>
    )
}

export default LoginPage;