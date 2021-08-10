import React, {useState} from 'react';
import NavBarLogo from "../data/_images/NavBarLogo.png";
import Avatar from "./Avatar"
import './Navbar.css'
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const MenuItems = [
    {
        title: '씨앗소개',
        url: '#',
        cName: 'nav-links'
    },
    {
        title: '그룹찾기',
        url: '#',
        cName: 'nav-links'
    },
    {
        title: '문의하기',
        url: '/',
        cName: 'nav-links'
    },
    {
        title: '그룹만들기',
        url: '#',
        cName: 'nav-links'
    },
    {
        title: '로그아웃',
        url: '/login',
        cName: 'nav-links'
    },
    
]

function NavBar() {
    return(
        <nav className='entire-nav-bar'>
            <img src={NavBarLogo} onClick={() => window.location.reload(false)} 
                alt="NavBarLogo" className="nav-bar-logo"/>
            <ul className="nav-bar">
                {MenuItems.map((item,index) =>{
                    return (
                        <button key={index} className="nav-buttons">
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </button>
                    )
                })}
                
                <Dropdown  onClose={()=>setDropDown(false)}>
                    <Dropdown.Toggle variant="transparent" id="dropdown-basic" drop="up">
                        <Avatar/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu >
                        <Dropdown.Item href="/congrats">내 프로필</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="/action-2">메세지</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="/login">로그아웃</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>          
            </ul>
        </nav>
    );
}

export default NavBar;