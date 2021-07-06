import React from 'react';
import './header.scss'
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (
    <div className='header'>
        
        <Link  to='/' className='home'>Home</Link>
        <div className='options'>
        <Link  to='/aboutme' className='option'>About me</Link>
        <Link  to='/wishlist' className='option'>WishList</Link>

        {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link  to='/signin-signup' className='option'>
          Sign In
        </Link>
      )}
      
        </div>
    </div>
)

export default Header