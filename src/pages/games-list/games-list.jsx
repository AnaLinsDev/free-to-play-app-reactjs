import React from 'react';
import './games-list.scss'
import GameRoledex from '../../components/game-roledex/game-roledex';

 class GamesListPage extends React.Component {
    constructor(props){
    super(props)
    this.state = {
        gameFilterName : '',
        
        categories:['mmorpg', 'shooter', 'strategy', 'moba',
            'social', 'open-world', 'zombie','space', 'superhero', 
            'card', 'battle-royale', 'mmo', 'mmofps', 'anime', 'fantasy',
            'action', 'military','horror']
        
    }
    }

    handleChange = event => {
        this.setState({
            gameFilterName: event.target.value.toLowerCase()
        })
        
    }

    render(){
        return (
        <div className="gamesListPage">
            <h1 className='title'>LIST OF GAMES</h1>
            <input className='filtro' placeholder="Search by Name" onChange={this.handleChange}></input>

            <div className="gamesList">
            {
                this.state.categories.map(category => (
                    <GameRoledex key={category} category={category} 
                    filtro={this.state.gameFilterName} />
                    ))
            }
            </div>
        </div>
        )
    }
}

export default GamesListPage



            /*        
            categories:['mmorpg', 'shooter', 'strategy', 'moba', 'racing', 'sports', 
            'social', 'sandbox', 'open-world', 'survival', 'pvp', 'pve', 'pixel', 
            'voxel', 'zombie', 'turn-based', 'first-person', 'third-Person', 
            'top-down', 'tank', 'space', 'sailing', 'side-scroller', 'superhero', 
            'permadeath', 'card', 'battle-royale', 'mmo', 'mmofps', 'mmotps', 
            '3d', '2d', 'anime', 'fantasy', 'sci-fi', 'fighting', 'action-rpg', 
            'action', 'military', 'martial-arts', 'flight', 'low-spec', 
            'tower-defense', 'horror', 'mmorts'] 
            */