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
    const [submitted, setSubmitted] = useState(false);
    const { email, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();
    const location = useLocation();

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
        <div class="d-md-flex col-md-10 offset-md-2 h-md-100">
            {/* left-screen*/}
            <div class="col-md-6 p-0 h-md-100">
                <h2 className='login-title'>씨앗 커뮤니티에 오신 것을 환영합니다!</h2>

             

                <form name="form" onSubmit={handleSubmit}>
                    <div className="form-group" style={{marginTop: 35}}>
                        <label className="login-input-title">이메일 주소</label>
                        <div>
                            <input 
                                placeholder="이메일 주소" 
                                type="text" name="email" 
                                value={email} onChange={handleChange} 
                                className={(submitted && !email ? ' is-invalid' : '')} />
                                {submitted && !email &&
                                    <div className="invalid-feedback">Email Address is required</div>
                                }
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="login-input-title">패스워드</label>
                        <div >
                            <input 
                                    type="password" name="password" 
                                    placeholder='패스워드'
                                    value={password} 
                                    onChange={handleChange} 
                                    className={'login-email-box' + (submitted && !password ? ' is-invalid' : '')} />
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
                        <Link to="/register" className="btn btn-link">회원 가입하기</Link>
                    </div>
                    <div> 
                        <text> 패스워드가 기억이 안나요 </text>
                        <a  href="#"> 패스워드 찾기 </a>
                    </div>

                    <button className='google-button'>
                        <img src={GoogleIcon} className='google-icon' alt='google'/>
                        <text className='google-text'>구글 어카운트로 로그인</text>
                    </button>

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