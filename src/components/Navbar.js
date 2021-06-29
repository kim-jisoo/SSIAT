import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import {MenuItems} from "./MenuItems";
import NavBarLogo from "../images/NavBarLogo.png";
import sojin from "../images/sojin.png";
import './Navbar.css'

class NavBar extends Component {
    render() {
        return(
            <nav >
                <img src={NavBarLogo} onClick={() => window.location.reload(false)} alt="NavBarLogo" className="nav-bar-logo"/>
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
                   
                     <Avatar alt="sojin" size={6} src={sojin}  className="nav-avatar"/>
                
                </ul>
               
                {/* <ul className="nav-buttons">
                    <button className="nav-links"> <a>씨앗소개</a> </button>
                    <button className="nav-links"> <a>그룹찾기</a> </button>
                    <button className="nav-links"> <a>문의하기</a> </button>
                    <button className="nav-links"> <a>그룹만들기</a> </button>
                </ul> */}

                 {/* temporary avatar */}
                
                
            </nav>
        )
    }
}

export default NavBar