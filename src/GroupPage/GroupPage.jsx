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
import MeetingCard from '../_components/MeetingCard';
import StockPhoto from '../data/_images/stock-image.jpg';
import MemberCard from '../_components/MemberCard';
import Review from '../_components/Review';

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

            <div className="group-row-1">
                <div>
                    <h5 className="group-title-4"> 예정된 모임</h5>
                    <MeetingCard 
                        time="2021년 5월 16일 (토) 11 AM PDT"
                        location="Great Park, Irvine, CA 92618"
                        likes="5월 정기모임과 공원청소"
                        members="7명"
                    />
                     <MeetingCard 
                        time="2021년 5월 16일 (토) 11 AM PDT"
                        location="Great Park, Irvine, CA 92618"
                        likes="5월 정기모임과 공원청소"
                        members="7명"
                    />
                     <MeetingCard 
                        time="2021년 5월 16일 (토) 11 AM PDT"
                        location="Great Park, Irvine, CA 92618"
                        likes="5월 정기모임과 공원청소"
                        members="7명"
                    />
                    
                </div>
                <div className="group-form-9">
                    <div className="group-row-2">
                        <h5 className="group-title-3">사진 갤러리</h5>
                        <a href="#" className="group-subtitle-2"> 모두 보기</a>  
                    </div>  
                    <div className="group-col-1">
                        <div className="group-row-3">
                            <img className="group-photo" src={StockPhoto} width="250"/>
                            <img className="group-photo" src={StockPhoto} width="250"/>
                            <img className="group-photo" src={StockPhoto} width="250"/>
                        </div>
                        <div className="group-row-3">
                            <img className="group-photo" src={StockPhoto} width="250"/>
                            <img className="group-photo" src={StockPhoto} width="250"/>
                            <img className="group-photo" src={StockPhoto} width="250"/>
                        </div>
                    </div>   
                </div>

                
            </div>
            <div className="group-form-9">
                <h5 className="group-title-4">사진 갤러리</h5>
                <MemberCard 
                    name="김아무개" 
                    text="지난 모임에서 돗자리를 공원에 두고 왔는데 혹시 
                        보신 분 계세요? 핑크색 비닐소재 입니다. 보신 분은 저한테 
                        메세지보내주세요."
                />
                <MemberCard 
                    name="김아무개" 
                    text="지난 모임에서 돗자리를 공원에 두고 왔는데 혹시 
                        보신 분 계세요? 핑크색 비닐소재 입니다. 보신 분은 저한테 
                        메세지보내주세요."
                />
                <MemberCard 
                    name="김아무개" 
                    text="지난 모임에서 돗자리를 공원에 두고 왔는데 혹시 
                        보신 분 계세요? 핑크색 비닐소재 입니다. 보신 분은 저한테 
                        메세지보내주세요."
                />
                    <MemberCard 
                    name="김아무개" 
                    text="지난 모임에서 돗자리를 공원에 두고 왔는데 혹시 
                        보신 분 계세요? 핑크색 비닐소재 입니다. 보신 분은 저한테 
                        메세지보내주세요."
                />
                    <MemberCard 
                    name="김아무개" 
                    text="지난 모임에서 돗자리를 공원에 두고 왔는데 혹시 
                        보신 분 계세요? 핑크색 비닐소재 입니다. 보신 분은 저한테 
                        메세지보내주세요."
                />
                <a href="#" className="group-subtitle-3">모두 보기</a>
            </div>

            <div className="group-div-1">
                <div className="group-row-4">
                    <h6 className="group-title-1"> 멤버 리뷰 </h6>
                    <a href="#" className="group-subtitle-3">모두 보기</a>
                </div>
                <div className="group-row-5">
                    <Review 
                        name="이아무개" 
                        body="평소 원예에 관심이 많았지만 
                        직장생활과 육아로 엄두를 못내고 있었어요. 지인으로 부터 씨앗
                        커뮤니티에 오렌지 카운티 원예그룹이 있다는 얘기를 듣고 용기내어 
                        가입하고 지난 3개월 동안 모임에 참석을 하고 있어요. 멤버들이 
                        취미생활 뿐 아니라 서로를 챙기고 공원 환경미화와 양로원에 화분을 
                        도네이션하는 등 봉사활동에 적극인 모습에큰 감동을 받고 저 또한 
                        참여하면서 보람을 느끼고 있습니다. 적극 추천합니다!"
                    />
                    <Review
                        name="이아무개" 
                        body="평소 원예에 관심이 많았지만 
                        직장생활과 육아로 엄두를 못내고 있었어요. 지인으로 부터 씨앗
                        커뮤니티에 오렌지 카운티 원예그룹이 있다는 얘기를 듣고 용기내어 
                        가입하고 지난 3개월 동안 모임에 참석을 하고 있어요. 멤버들이 
                        취미생활 뿐 아니라 서로를 챙기고 공원 환경미화와 양로원에 화분을 
                        도네이션하는 등 봉사활동에 적극인 모습에큰 감동을 받고 저 또한 
                        참여하면서 보람을 느끼고 있습니다. 적극 추천합니다!"
                    />
                </div>
                <div className="group-row-5">
                    <Review
                        name="이아무개" 
                        body="평소 원예에 관심이 많았지만 
                        직장생활과 육아로 엄두를 못내고 있었어요. 지인으로 부터 씨앗
                        커뮤니티에 오렌지 카운티 원예그룹이 있다는 얘기를 듣고 용기내어 
                        가입하고 지난 3개월 동안 모임에 참석을 하고 있어요. 멤버들이 
                        취미생활 뿐 아니라 서로를 챙기고 공원 환경미화와 양로원에 화분을 
                        도네이션하는 등 봉사활동에 적극인 모습에큰 감동을 받고 저 또한 
                        참여하면서 보람을 느끼고 있습니다. 적극 추천합니다!"
                    />
                    <Review
                        name="이아무개" 
                        body="평소 원예에 관심이 많았지만 
                        직장생활과 육아로 엄두를 못내고 있었어요. 지인으로 부터 씨앗
                        커뮤니티에 오렌지 카운티 원예그룹이 있다는 얘기를 듣고 용기내어 
                        가입하고 지난 3개월 동안 모임에 참석을 하고 있어요. 멤버들이 
                        취미생활 뿐 아니라 서로를 챙기고 공원 환경미화와 양로원에 화분을 
                        도네이션하는 등 봉사활동에 적극인 모습에큰 감동을 받고 저 또한 
                        참여하면서 보람을 느끼고 있습니다. 적극 추천합니다!"
                    />
                </div>
            </div>
        </div>

    )
}

export {GroupPage};