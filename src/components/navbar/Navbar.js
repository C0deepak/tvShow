import React from 'react'
import { BiCameraMovie, BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav>
                <Link to='/' className="navLogo"><BiCameraMovie/>TV<span>Trove</span></Link>
                <div className="navLink">
                    <div className="navSearch">
                        <input type="text" placeholder='Search Shows...'/>
                        <BiSearchAlt size={20}/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar