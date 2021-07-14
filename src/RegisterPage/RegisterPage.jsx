import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';

import './RegisterPage.css';
import SignUp from '../data/_images/sign-up.png';

function RegisterPage() {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
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

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.firstName && user.lastName && user.email && user.password) {
            dispatch(userActions.register(user));
        }
    }

    return (
        <div className="sign-up-page">
            <div className="sign-up-left-panel">
                <h2 className="sign-up-title">씨앗 커뮤니티에 가입하세요!</h2>
                <form name="form" onSubmit={handleSubmit}>
                    <div className="sign-up-names">
                        <div className="sign-up-name">
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

                    <div className="form-group">
                        <label className="sign-up-subtitles">이메일 주소</label>
                        <input 
                        type="text" 
                        name="email" 
                        value={user.email} 
                        onChange={handleChange} 
                        placeholder="e-mail address"
                        className={'input-box' + (submitted && !user.email ? ' is-invalid' : '')} />
                        {submitted && !user.email &&
                            <div className="invalid-feedback">Email is required</div>
                        }
                    </div>
                    <div className="form-group">
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
                    <div className="form-group">
                        <button className="btn btn-primary">
                            {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Register
                        </button>
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>

            <div className="sign-up-right-panel">
                <img src={SignUp} alt="signup image" className='sign-up-image' />
            </div>

            <div className="clear"></div>
        </div>
    );
}

export { RegisterPage };