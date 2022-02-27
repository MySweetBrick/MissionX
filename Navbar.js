import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/Home/Star Logo 07-2.png";
import tinoRangatiratanga from '../images/Home/Maori flag.png';
import nzFlag from '../images/Home/NZ Flag.png';
import './Navbar.css'



function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)

    return ( 
        <div className='navbar'>
            <div className='navbarLogo'>
                <Link to='/'> <img src = {logo} alt='' /></Link>
            </div>
           <div className='navbarContainer'>
                <div className='hiddenLinks'>
                 <button className='button'>
                 <i className='fa-solid fa-bars'></i>
                    </button>
                </div>
                <Link to='/'>Home</Link> 
                <Link to='/features'>Features</Link> 
                <Link to='/teachers'>Teachers</Link> 
            </div>
            <div className='signInContainer'> 
                    <div className='languageButton'>
                            <img className='nz' src = {nzFlag} alt='' /> 
                            <img className='rangatiratanga' src = {tinoRangatiratanga} alt=''/> 
                    </div>
                    <i className='fa-solid fa-circle-user' />
                    <div className='signInButton'>
                        <Link to='signin'>Register/LogIn</Link>
                    </div>
                  
                </div>
        </div>
    )
}
export default Navbar