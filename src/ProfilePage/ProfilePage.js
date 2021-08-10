import React from 'react';
import NavBar from '../_components/NavBar';
import Avatar from '../_components/Avatar';
import Button from '../_components/Button';
import Card from '../_components/Card';
import './ProfilePage.css';
import SamplePicture from "../data/_images/rendered_15.jpg"

function ProfilePage() {
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
                            <Button styleName="profile-button" text="수정하기"/>
                            <div class="profile-col-sm">
                                <text className="profile-name">수정하기</text>
                                <text className="profile-user">씨앗 아이디: User1234</text>
                            </div>
                        </div>
                    </div>
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
                </div>   
            </div>
            
        </div>

    )
}

export {ProfilePage};