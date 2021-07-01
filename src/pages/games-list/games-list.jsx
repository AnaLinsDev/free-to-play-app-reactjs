import React from 'react';
import './games-list.scss'
import GameItem from '../../components/game-item/game-item'


 class GamesListPage extends React.Component {
    constructor(props){
    super(props)
    this.state = {
        games : [],
        gamesFilter : []
    }
    }

    componentWillMount(){
        fetch('https://www.freetogame.com/api/games')
        .then(res => res.json())
        .then((out) => {
            this.setState( {games: out.filter(game => game.id < 91)})})
        .then(()=> this.setState( {gamesFilter: this.state.games }))
        .catch(err => { throw err });


    }


    handleChange = event => {
        this.setState({gamesFilter: this.state.games.filter(game => 
            game.title.toLowerCase().startsWith(
                event.target.value.toLowerCase()
                ))});
    }

    
    render(){
        return (
        <div className="gamesListPage">
            <h1 className='title'>LIST OF GAMES</h1>
            <input className='filtro' placeholder="Search by Name" onChange={this.handleChange}></input>
            <div className="gamesList">
            {
                this.state.gamesFilter.map(({ id, ...otherProps }) => (
                    <GameItem key={id} id={id} {...otherProps} />))
            }
            </div>
        </div>
        )
    }
}

export default GamesListPage
