import React, {useState, useEffect} from 'react';
import NavBar from '../_components/NavBar';
import Avatar from '../_components/Avatar';
import Interest from '../_components/Interest'
import Card from '../_components/Card';
import './ProfilePage.css';
import SamplePicture from "../data/_images/rendered_15.jpg"

function ProfilePage() {
    const [onEdit, setOnEdit] = useState(false);
    const [user, setUser] = useState({
        email: '',
        password: '',
        address: '',
        city: '',
        country: '',
        phone: '',
        birthdate: '',
        createdate: '',
    });

    function handleChange(e) {
        const {name, value } = e.target;
        setUser(user =>({...user, [name]: value}))
    }
    function handleSubmit() {
        setOnEdit(false);
    }
    return(
        <div>
            <NavBar />
            <div class="profile-container">
            
                <div class="profile-col-1">
                    <div class="row">
                        <div>
                            <Avatar styleName="profile-avatar" /> 
                        </div>
                        <div >
                        { onEdit ? 
                            ( 
                                <button className="profile-button" onClick={handleSubmit}>완료</button>
                            )
                            :
                            (
                                <button className="profile-button" onClick={() => {setOnEdit(true)}}>수정하기</button>
                            )
                        }
                           
                            <div className="profile-col-sm">
                                <text className="profile-name">홍길동</text>
                                 <h1 className="profile-username">씨앗 아이디: User1234 </h1>
                            </div>
                        </div>
                    </div>
                    
                    { onEdit ? 
                        ( 
                            <span>
                                <ul class="list-group list-group-flush profile-list">
                                    <li class="list-group-item">
                                        <label>이메일:</label>
                                        <input type="email" class="form-control" value="email" id="email" placeholder="email@gmail.com"/>
                                    </li>
                                    <li class="list-group-item">
                                        <label>비밀번호:</label>
                                        <input type="password" class="form-control" id="password" placeholder="비밀번호 수정하기"/>
                                    </li>
                                    <li class="list-group-item">
                                        <label>주소:</label>
                                        <input type="address" class="form-control" id="address" placeholder="1233 Seed St."/>
                                    </li>
                                    <li class="list-group-item">
                                        <input type="city" class="form-control" id="city" placeholder=" Seed City, CA  92618"/>
                                    </li>
                                    <li class="list-group-item">
                                        <label>국가명:</label>
                                        <input type="email" class="form-control" id="email" placeholder="USA"/>
                                    </li>
                                    <li class="list-group-item">
                                        <label>전화번호:</label>
                                        <input type="email" class="form-control" id="email" placeholder="213-456-7890"/>
                                    </li>
                                    <li class="list-group-item">
                                        <label>생년월일:</label>
                                        <input type="email" class="form-control" id="email" placeholder="01-01-1994"/>
                                    </li>
                                    <li class="list-group-item">
                                        <label>가입일:</label>
                                        <input type="email" class="form-control" id="email" placeholder="05-15-2021"/>
                                    </li>
                                    <li class="list-group-item"/>
                                </ul>
                            </span>
                        ) : 
                        (
                            <div>
                                <ul class="list-group list-group-flush profile-list">
                                    <li class="list-group-item">이메일: email@gmail.com </li>
                                    <li class="list-group-item">비밀번호: 비밀번호 수정하기  </li>
                                    <li class="list-group-item">주소:  1234 Seed St. </li>
                                    <li class="list-group-item">  Seed City, CA  92618 </li>
                                    <li class="list-group-item">국가명: USA</li>
                                    <li class="list-group-item">전화번호: 213-456-7890</li>
                                    <li class="list-group-item">생년월일: 01-01-1994 </li>
                                    <li class="list-group-item">가입일: 05-15-2021</li>
                                    <li class="list-group-item"></li>
                                </ul>
                            </div>
                        )
                    }
                </div>
                <div class="profile-col-2">
                    <div className="profile-card-grouped">
                        <h1 className="profile-title"> 내가  가입한 그룹 </h1>
                        <div className="profile-groups">
                            <Card image={SamplePicture} subtitle="카테고리 이름" title="그룹 이름" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                            <Card image={SamplePicture} subtitle="카테고리 이름" title="그룹 이름" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                            <Card image={SamplePicture} subtitle="카테고리 이름" title="그룹 이름" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                        </div>  
                    </div>

                    <div className="profile-card-grouped">
                        <h1 className="profile-title"> 추천 그룹 </h1>
                        <div className="profile-groups">
                            <Card image={SamplePicture} subtitle="카테고리 이름" title="그룹 이름" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                            <Card image={SamplePicture} subtitle="카테고리 이름" title="그룹 이름" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                            <Card image={SamplePicture} subtitle="카테고리 이름" title="그룹 이름" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                        </div>  
                    </div>

                    <div className="profile-card-grouped">
                        <h1 className="profile-title"> 나의 관심사 </h1>
                        <h2 className="profile-subtitle">선택한 관심사를 기반으로 잘 맞는 그룹을 추천해 드립니다.</h2>
                        <div className="profile-interest-groups">
                            <Interest text="하이킹"/>
                            <Interest text="하이킹"/>
                            <Interest text="하이킹"/>
                            <Interest text="하이킹"/>
                            <Interest text="하이킹"/>
                            <Interest text="하이킹"/>
                            <Interest text="하이킹"/>
                            <Interest text="하이킹"/>
                            <Interest text="하이킹"/>
                            <Interest text="하이킹"/>
                            <Interest text="하이킹"/>
                            <Interest text="하이킹"/>
                        </div>  
                    </div>

                    <div className="profile-card-grouped">
                        <div class="row">
                            <h1 className="profile-title"> 관심있는 분야 </h1>
                            <input class="form-control profile-form" type="text" placeholder="관심분야 검색" readonly></input>
                        </div>
                        <h2 className="profile-subtitle">관심있는 분야, 취미 등을 선택해 주세요.</h2>
                        <div className="profile-interest-groups">
                            <Interest text="하이킹"/>
                            <Interest text="하이킹"/>
                            <Interest text="하이킹"/>
                            <Interest text="하이킹"/>
                            <Interest text="하이킹"/>
                            <Interest text="하이킹"/>
                            <Interest text="하이킹"/>
                            <Interest text="하이킹"/>
                            <Interest text="하이킹"/>
                            <Interest text="하이킹"/>
                            <Interest text="하이킹"/>
                            <Interest text="하이킹"/>
                        </div>  
                    </div>
                </div>   
            </div>
            
        </div>

    )
}

export {ProfilePage};