import React from 'react';
import './header.scss'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import { selectWishList } from '../../redux/wishlist/wishlist.selector'
import { selectCurrentUser } from '../../redux/user/user.selector'
import {createStructuredSelector} from 'reselect'

const Header = ({currentUser, quantity}) => (
    <div className='header'>
        
        <Link  to='/' className='home'>Home</Link>
        <div className='options'>
        <Link  to='/aboutme' className='option'>About me</Link>
        
        {currentUser ?  
           <Link  to='/wishlist' className='option'>WishList ({quantity.length})</Link>
        : ''}

        {currentUser ?        
          <div className='option' onClick={() => auth.signOut()}>Sign Out</div> 
        : <Link  to='/signin' className='option'>Sign In</Link> }
          </div>

    </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  quantity: selectWishList
})


export default connect(mapStateToProps)(Header)




/*


const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
})

Aqui iremos para root-reducer -> user: userReducer -> 
no userReducer haverá a pure function que deve retornar o state atual

*/