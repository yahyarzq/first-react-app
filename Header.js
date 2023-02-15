import React from 'react'
import  ReactDOM  from 'react-dom'

const Header = () => { 
    return (
    <header>
    <nav className="nav">
        <img src="./logo192.png" className="nav-logo"/>
        <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
 </header>
)}

export default Header
// module.exports = Header