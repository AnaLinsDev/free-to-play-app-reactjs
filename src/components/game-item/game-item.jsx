import React from 'react';
import { Link } from 'react-router-dom';
import './game-item.scss'
import {connect} from 'react-redux';
import { addGame } from '../../redux/wishlist/wishlist.actions';

const GameItem = ({game, addGame}) => {
    
    const {id, title ,thumbnail, genre, platform} = game;

    return(
    <div className='item_games'>
        <Link to={`/game/${id}`}>
        <div      
            className='background-image'
            style={{ backgroundImage: `url(${thumbnail})` }}/>
        
        <p>{title}<br/>Genre: {genre}<br/>Platform: {platform}</p>
        </Link>

        <button onClick={()=> addGame(game)}className='button-wishlist'>
            + my wishlist
        </button>
        
    </div>
)}

const mapDispatchToProps = dispatch => ({
    addGame: game => dispatch(addGame(game))
  })
  
  
export default connect(null, mapDispatchToProps)(GameItem)
