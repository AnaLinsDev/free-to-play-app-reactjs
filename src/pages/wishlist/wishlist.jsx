import React from 'react';
import './wishlist.scss'
import {connect} from 'react-redux';
import GameItem from '../../components/game-item/game-item';
import {selectWishList} from '../../redux/wishlist/wishlist.selector'
import {createStructuredSelector} from 'reselect'


const WishlistPage = ({games}) => {
    
    return (
    <div className='wishlist'>
        <h1>WISH LIST </h1>
        <h2>Total: {games.length}</h2>
        <div className='game-wishlist'>
        {
        games.map(game => <GameItem key={game.id} game={game} />)
        }
        </div>
        </div>
    )
    }

    const mapStateToProps = createStructuredSelector({
        games: selectWishList,

      })
  
  
  export default connect(mapStateToProps)(WishlistPage)
