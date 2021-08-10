import React from 'react';
import { Link } from 'react-router-dom';
import './game-item.scss'

import {connect} from 'react-redux';
import {removeGame} from '../../redux/wishlist/wishlist.actions'


const GameItem = ({game, removeGame}) => {
    
    const {id, title ,thumbnail, genre, platform} = game;

    return(
               
    <div className='item_games_conteiner'>
        {/* verifica se está na wishlist page para aparecer o botao de remover */
        window.location.href.split('/').pop() == 'wishlist' ? 
        <button className='remove-button' onClick={() => removeGame(game)}>X</button>: ''
        }
        <div className='item_games'>
        <Link to={`/game/${id}`}>
        <div      
            className='background-image'
            style={{ backgroundImage: `url(${thumbnail})` }}/>
        
        
        </Link>
        </div>
        

    </div>
)}

const mapDispatchToProps = dispatch => ({
    removeGame: game => dispatch(removeGame(game))
  })
  
  
  export default connect(null, mapDispatchToProps)(GameItem);
