import React from 'react'
import DrawerToggleButton from '../components/SideDrawer/DrawerToggleButton'
import '../styles/nav-bar.scss'
import logo from '../Logo/Logo.PNG'
const  NavBar = (props) => {
    return(
    <header className="toolbar">
        <nav className= "toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"><img src={logo} style={{maxWidth:'10rem'}} alt="Save"/></div>
            <div className="spacer"/>
            <div className="toolbar_navigation_items">
                <ul>
                    <li><a href = "/"> Products </a></li>
                    <li><a href = "/"> Users </a></li>
                    <li><a href = "/"> About </a></li>
                </ul>
                
            </div>
        </nav>
    </header>
    )
}

export default NavBar