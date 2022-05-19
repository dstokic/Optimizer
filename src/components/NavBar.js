import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navbar">
            <h1 className="logo">Optimizer</h1>
            <div className="links">
                <Link to="/">Preferences</Link>
            </div>
        </div>
    )
}

export default NavBar