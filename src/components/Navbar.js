import React, {Component} from 'react';
import {MenuItems} from "./MenuItems";
import NavBarLogo from "../images/NavBarLogo.png";
import './Navbar.css'

class NavBar extends Component {
    render() {
        return(
            <nav>
                <img src={NavBarLogo} alt="NavBarLogo" className="NavBarLogo"/>
                <ul className="NavbarItems">
                    {MenuItems.map((item,index) =>{
                        return (
                            <li key={index} >
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default NavBar