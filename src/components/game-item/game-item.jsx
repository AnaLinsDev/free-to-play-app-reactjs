import React from 'react';
import { Link } from 'react-router-dom';
import './game-item.scss'



const GameItem = ({id, title, genre, platform, thumbnail, }) => (
    <div className='item_games'>
        <Link to={`/game/${id}`}>
        <div      
            className='background-image'
            style={{ backgroundImage: `url(${thumbnail})` }}/>
        
        <p>{title}</p>
        <p>Genre: {genre}</p>
        <p>Platform: {platform}</p>
        </Link>
    </div>
)



export default GameItem