import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'
import ApiResponse from './ApiResponse';
const Nav = () => {
    return (
        <div className='nav'>
         <div className="homepage">
            <Link to = '/'><button>Go To HomePage</button></Link>
        </div>
           <ApiResponse />
        </div>
    )
}

export default Nav
