import React from 'react';
import './game-info.scss'
import { addGame } from '../../redux/wishlist/wishlist.actions';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const GameInfo = ({props, addGame}) => (

    <div className='collection_games'>
        <p>{props.short_description}</p>

        <Link to={`/wishlist`} >
            <div className= 'button-wishlist-area'>
                <button onClick={()=> addGame(props)}className='button-wishlist'>
                    + Wishlist
                </button>
            </div>
        </Link>

         {/* Lista de dados */}
        <h2>Data</h2>
        <p> Genre : {props.genre}</p>
        <p> Status : {props.status}</p>
        <p> Platform : {props.platform}</p>
        <p> Release Date : {props.release_date}</p>

        {/* Aqui coloquei um [if] pois não estava renderizando a busca no json de props.minimum_system_requirements,
        então fiz um if para que se retornar "undefined", ele apenas retorne vazio */}
        <hr></hr>
        {props.minimum_system_requirements ? 
        <div><h2>Minimum system requirements</h2>
            <p> Operating System : {props.minimum_system_requirements.os}</p>
            <p> Processor : {props.minimum_system_requirements.processor}</p>
            <p> Memory : {props.minimum_system_requirements.memory}</p>
            <p> Graphics : {props.minimum_system_requirements.graphics}</p>
            <p> Storage : {props.minimum_system_requirements.storage}</p>
        </div>  :''}

        {/* Description */}
        <h2 className='description'>Description</h2>
        <p>{props.description}</p>

        {/* Link */}
        <div style={{textAlign: 'center'}}>  
            <a href={props.game_url} target="_blank" rel="noreferrer" className='link_site_oficial' >Vá para o site oficial</a>
        </div>
        <footer></footer>
    </div>
)

const mapDispatchToProps = dispatch => ({
    addGame: game => dispatch(addGame(game))
  })
  
  
export default connect(null, mapDispatchToProps)(GameInfo)