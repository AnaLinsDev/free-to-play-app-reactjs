import React from 'react';
import './game-info.scss'



const GameInfo = ({props}) => (

    <div className='collection_games'>

        <p>{props.short_description}</p>
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
        <div>Minimum system requirements
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

export default GameInfo