import React from 'react';
import './header.scss'
import {connect} from 'react-redux';
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
        <Link  to='/signin' className='option'>
          Sign In
        </Link>
      )}
      
        </div>
    </div>
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
})


export default connect(mapStateToProps)(Header)




/*


const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
})

Aqui iremos para root-reducer -> user: userReducer -> 
no userReducer haverá a pure function que deve retornar o state atual

*/