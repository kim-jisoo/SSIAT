import React, {Component} from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import { makeStyles } from '@material-ui/core/styles';
import {HiChevronDown} from "react-icons/hi"
import {MenuItems} from "./MenuItems";
import NavBarLogo from "../data/_images/NavBarLogo.png";
import Avatar from "./Avatar"
import './Navbar.css'
import { Link } from 'react-router-dom';

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
                <Avatar/>
                <HiChevronDown size={35} className="nav-arrow">
                <select >
                        <option value="profile"> 내 프로필 </option>
                        <option value="message"> 메세지 </option>
                        <Link to="/login" className="btn btn-link logout-link">로그아웃</Link>
                </select>
                </HiChevronDown>
                
                    {/* <Avatar alt="sojin" src={sojin}  className="nav-avatar"/> */}
                
            </ul>
        </nav>
    );
}

export default NavBar;