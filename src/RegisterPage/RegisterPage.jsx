import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';

import './RegisterPage.css';
import SignUp from '../data/_images/sign-up.png';

import GoogleIcon from '../data/_images/google-icon.png';

function RegisterPage() {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [isChecked, setIsChecked] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleIsChecked() {
        setIsChecked(true);
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.firstName && user.lastName && user.email && user.password && isChecked) {
            dispatch(userActions.register(user));
        }
    }

    return (
        <div className="sign-up-page">
            <div className="sign-up-left-panel">
                <h2 className="sign-up-title">씨앗 커뮤니티에 가입하세요!</h2>

                <button id="google-button" className='google-button'>
                    <img src={GoogleIcon} className='google-icon' alt='google'/>
                    <text className='google-text'>구글 어카운트로 로그인</text>
                </button>

                <form name="form" onSubmit={handleSubmit}>
                    <div className="sign-up-first-last">
                        <div className="sign-up-last">
                                <label className="sign-up-subtitles">성 (Last Name)</label>
                                <input 
                                    type="text" 
                                    name="lastName" 
                                    value={user.lastName} 
                                    onChange={handleChange} 
                                    placeholder="성 Last Name"
                                    className={'input-box-last' + (submitted && !user.lastName ? ' is-invalid' : '')} />
                                {submitted && !user.lastName &&
                                    <div className="invalid-feedback">Last Name is required</div>
                                }
                        </div>

                        <div className="sign-up-name">
                            <label className="sign-up-subtitles">이름 (First Name)</label>
                            <input 
                                type="text" 
                                name="firstName" 
                                value={user.firstName} 
                                placeholder="이름 First Name"
                                onChange={handleChange} 
                                className={'input-box-first' + (submitted && !user.firstName ? ' is-invalid' : '')} />
                            {submitted && !user.firstName &&
                                <div className="invalid-feedback">First Name is required</div>
                            }
                        </div>
                    </div>

                    <div className="sign-up-name">
                        <label className="sign-up-subtitles">이메일 주소</label>
                        <input 
                        type="email" 
                        name="email" 
                        value={user.email} 
                        onChange={handleChange} 
                        placeholder="e-mail address"
                        className={'input-box' + (submitted && !user.email ? ' is-invalid' : '')} />
                        {submitted && !user.email &&
                            <div className="invalid-feedback">Email is required</div>
                        }
                    </div>
                    <div className="sign-up-name">
                        <label className="sign-up-subtitles">패스워드</label>
                        <input 
                        type="password" 
                        name="password" 
                        value={user.password} 
                        onChange={handleChange}
                        placeholder="password" 
                        className={'input-box' + (submitted && !user.password ? ' is-invalid' : '')} />
                        {submitted && !user.password &&
                            <div className="invalid-feedback">Password is required</div>
                        }
                    </div>

                    <div>
                        <input className={'sign-up-check-box' + (submitted && !isChecked ? ' is-invalid' : '')} 
                        type="checkbox" id="terms"
                        onChange={handleIsChecked}
                        />
                        이용약관과 개인정보처리방침에 동의합니다.
                        {submitted && !isChecked &&
                                <div className="invalid-feedback">Please agree to our Terms and Conditions & Private Policy</div>
                        }
                    </div>

                    <div className="form-group ">
                        <button className="btn register-button">
                            {registering && <span></span>}
                            가입하기
                        </button>
                        <text className="already-have-an-account">
                            회원이신가요?
                            <Link to="/login" className="btn btn-link go-back-to-login">로그인 하기</Link>
                        </text>
                    </div>

                </form>
            </div>

            <div className="sign-up-right-panel">
                <img src={SignUp} alt="signup image" className='sign-up-image' />
            </div>

        </div>
    );
}

export { RegisterPage };