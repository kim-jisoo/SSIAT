import React, {useState} from 'react';
import LoginImage from '../images/login-2.png';
import Logo from '../images/NavBarLogo.png';
import GoogleIcon from '../images/google-icon.png';
import './LoginPage.css';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function LoginPage () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
  
    function handleSubmit(event) {
      event.preventDefault();
    }
    return( 
        <div className="login-page">
            <div className="login-left-panel">
                <div className='login-left-panel-2'>
                    <text className="login-title">씨앗 커뮤니티에 오신 것을 환영합니다!</text>
                   
                    <button className='google-button'>
                        <img src={GoogleIcon} className='google-icon' alt='google'/>
                        <text className='google-text'>구글 어카운트로 로그인</text>
                    </button>
                    
                    
                    <Form onSubmit={handleSubmit}>
                        <text className="login-input-title">이메일 주소</text>

                        <Form.Group size="lg" className="login-email-box"  
                        controlId="email">
                            <Form.Control
                                placeholder="email address"
                                autoFocus
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <text className="login-input-title"> 패스워드 </text>

                        <Form.Group size="lg" controlId="password">
                        
                            <Form.Control
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                            <button onClick={() => window.location.reload(false)} className="login-button">
                                    <a className="login-button-text" href="#">
                                    로그인
                                    </a>
                            </button>

                        <div> 
                            <text> 아직 회원이 아니신가요? </text>
                            <a  href="#">  회원 가입하기 </a>
                        </div>
                        <div> 
                            <text> 패스워드가 기억이 안나요 </text>
                            <a  href="#"> 패스워드 찾기 </a>
                        </div>

                    </Form>
                    
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