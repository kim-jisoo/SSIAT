import React, {Component} from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import { makeStyles } from '@material-ui/core/styles';
import {HiChevronDown} from "react-icons/hi"
import {MenuItems} from "./MenuItems";
import NavBarLogo from "../data/_images/NavBarLogo.png";
import Avatar from "./Avatar"
import './Navbar.css'

class NavBar extends Component {
   
    render() { 
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
                    <HiChevronDown size={35} className="nav-arrow" />
                     {/* <Avatar alt="sojin" src={sojin}  className="nav-avatar"/> */}
                    
                </ul>
            </nav>
        )
    }
}

export default NavBar