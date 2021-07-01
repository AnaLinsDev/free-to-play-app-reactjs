import React from 'react';
import './header.scss'
import {Link} from 'react-router-dom';

const Header = () => (
    <div className='header'>
        
        <Link  to='/' className='home'>Home</Link>
        <Link  to='/aboutme' className='options'>About me</Link>
        
    </div>
)

export default Header