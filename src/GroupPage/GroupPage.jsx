import React from 'react'; 
import NavBar from '../_components/NavBar';
import './GroupPage.css';
import WelcomeImage from '../data/_images/welcome-image.jpg';
import {Share2} from 'react-feather';
import {Link} from 'react-router-dom';
import Button from '../_components/Button';
import Block from '../_components/Block';
import Sojin from '../_components/Avatar';
import Avatar from '../_components/Avatar';

function GroupPage() {
    return(
        <div className="group-scroll">
            <NavBar/>
            <div className='group-form-1'> 
                <div class="card group-card-1 border-info" >
                    <div class="card-body">
                            <div className='group-subtitle-1'>
                                <h6 class="card-title">카테고리</h6>
                                <h6 class="card-title">공개 그룹 </h6>
                            </div>
                            <h5 class="card-subtitle mb-2 group-title-1">오렌지 카운티 원예 클럽</h5>
                            <div className='group-info-1 ' style={{marginTop: '8%'}}>
                                <h6 className='group-user-data-1'> 그룹장 </h6>
                                <h6 className='group-user-data-2'> 김가든 </h6>
                                <h6 className='group-user-data-1' style={{marginLeft:'15%'}}> 결성일 </h6>
                                <h6 className='group-user-data-2'> 2020년 3월 15일 </h6>
                            </div>

                            <div className='group-info-1'>
                                <h6 className='group-user-data-1'> 멤버수 </h6>
                                <h6 className='group-user-data-2'> 32  </h6>
                                <h6 className='group-user-data-1' style={{marginLeft:'20%'}}> 지역 </h6>
                                <h6 className='group-user-data-2'> 미주 캘리포니아  오렌지 카운티 </h6>
                            </div>

                            <div className='group-info-1'>
                                <h6 className='group-user-data-1'> 최근 모임  </h6>
                                <h6 className='group-user-data-2'> 2021년 4월 25일 </h6>
                                
                            </div>

                            <div  className='group-form-2'>
                                <div className='group-form-3'>
                                    <a href="#" class="card-link group-link-1">초청(공유)하기</a>
                                    <Share2 className="group-share" color="var(--Pink, rgb(242, 121, 128))" size="40"/>
                                </div>
                                
                                <Button styleName="group-button-1" text=" 가입 신청"/>
                            </div>
                            
                    </div>
                </div>

                <img src={WelcomeImage} class="group-welcome-image"/>
            </div>

            <div className="group-form-4">
                <Block title="모임횟수" value="21"/>
                <Block title="모임횟수" value="21"/>
                <Block title="모임횟수" value="21"/>
                <Block title="모임횟수" value="21"/>
            </div>
           <div className="group-form-1">
                <div class="card group-card-2 border-info" >
                    <h5 className="card-subtitle mb-2 group-title-1">오렌지 카운티 원예 클럽</h5>
                    <body className="group-body-1">
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id
                        est laborum
                    </body>
                </div>
                
                <div class="card group-card-2 border-info" >
                    <div className="group-form-5">
                        <div className="group-form-6">
                            <h6 className="group-title-2">그룹장</h6>
                            <h5 className="group-body-1">김가든</h5>
                        </div>
                        <Avatar styleName="group-avatar"/>
                    </div>
                    <div className="group-form-7">
                        <div className="group-labels-1">
                            <h6 className="group-title-2">멤버</h6>
                            <h5 className="group-body-1">32명</h5>
                            <h5 className="group-body-2">모두 보기</h5>
                        </div>
                        <div className="group-form-8">
                            <div >
                                <Avatar styleName="group-avatar"/>
                                <Avatar styleName="group-avatar"/>
                                <Avatar styleName="group-avatar"/>
                                <Avatar styleName="group-avatar"/>
                            </div>
                            <div>
                                <Avatar styleName="group-avatar"/>
                                <Avatar styleName="group-avatar"/>
                                <Avatar styleName="group-avatar"/>
                                <Avatar styleName="group-avatar"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="group-form-4">
                <div>
                    <h5 className="group-title-1"> 예정된 모임</h5>
                </div>
                <div>
                    <div className="group-form-9">
                        <h5 className="group-title-3">사진 갤러리</h5>
                        <h6 className="group-body-2"> 모두 보기</h6>
                    </div>
                </div>
            </div>
        </div>

    )
}

export {GroupPage};