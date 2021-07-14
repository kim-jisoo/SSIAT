import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../_actions';
import './LoginPage.css'

import LoginImage from '../data/_images/login-3.png';
import Logo from '../data/_images/NavBarLogo.png';
import GoogleIcon from '../data/_images/google-icon.png';

function LoginPage() {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const [isSignedIn, setIsSignedIn] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const { email, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();
    const location = useLocation();

    function responseGoogle(response) {
        console.log(response);
        console.log(response.profileObj); 
    }

    
    // reset login status
    useEffect(() => { 
        dispatch(userActions.logout()); 
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (email && password) {
            // get return url from location state or default to home page
            const { from } = location.state || { from: { pathname: "/" } };
            dispatch(userActions.login(email, password, from));
        }
    }
    return (
        <div className="login-page">
            {/* left-screen*/}
            <div className="login-left-panel">
                <h2 className='login-title'>씨앗 커뮤니티에 오신 것을 환영합니다!</h2>
                <form name="form" onSubmit={handleSubmit}>
                    <div className="form-group" style={{marginTop: 35}}>
                        <label className="login-input-title">이메일 주소</label>
                        <div>
                            <input 
                                placeholder="email address" 
                                type="text" name="email" 
                                value={email} onChange={handleChange} 
                                className={'input-box' + (submitted && !email ? ' is-invalid' : '')} />
                                {submitted && !email &&
                                    <div className="invalid-feedback">Email Address is required</div>
                                }
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="login-input-title">패스워드</label>
                        <div>
                            <input 
                                    type="password" name="password" 
                                    placeholder='password'
                                    value={password} 
                                    onChange={handleChange} 
                                    className={'input-box' + (submitted && !password ? ' is-invalid' : '')} />
                        </div>

                        {submitted && !password &&
                            <div className="invalid-feedback">Password is required</div>
                        }
                    </div>
                    
                    <button className="btn login-button">   
                    { loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span> }    
                        로그인
                    </button>


                    <div> 
                        <text> 아직 회원이 아니신가요? </text>
                        <Link to="/register" className="btn btn-link button-link">회원 가입하기</Link>
                    </div>

                    <div> 
                        <text> 패스워드가 기억이 안나요 </text>
                        <a  href="#"> 패스워드 찾기 </a>
                    </div>

                    <button id="google-button" className='google-button'>
                        <img src={GoogleIcon} className='google-icon' alt='google'/>
                        <text className='google-text'>구글 어카운트로 로그인</text>
                    </button>
                    
                    {/* <GoogleLogin
                        clientId="95964570519-cl08olhuejqb1ouvftprassoatdjkkp7.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    /> */}

                </form>  
            
            </div>
            {/* right-screen*/}
            <div className="login-right-panel">
                <img src={Logo} alt="logo" className='login-logo' />
                <img src={LoginImage} alt="login" className='login-image'/>
            </div>
            
        </div>
    );
    
}

export { LoginPage };