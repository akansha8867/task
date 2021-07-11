import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.png'

export class Navbar extends Component {

    render() {
        return (
            //* Navbar *//
            <div className="navbarMain">
                    <div className="LOGO">
                        <img src={logo} alt="logo" />
                    </div>
                    <ul className="navlink" type='none'>
                        <Link to="/Join"><button className="join">JOIN US</button></Link>
                    </ul>
            </div>
            //* Navar Ended *//
        )
    }
}

export default Navbar
