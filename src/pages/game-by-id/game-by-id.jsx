import React from 'react';
import './game-by-id.scss'
import GameInfo from '../../components/game-info/game-info';
import GameSlide from '../../components/game-slide/game-slide';

class GameByIdPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            game : {}
        }
    }

    componentWillMount(){
        const idCurr = window.location.pathname.split('/').pop()

        fetch(`https://www.freetogame.com/api/game?id=${idCurr}`)
        .then(res => res.json())
        .then((out) => {
            this.setState( {game: out})
        })
        .catch(err => { throw err });
    }

        

    render() {
        const data = this.state.game;
        return (
        <div className='gameById'>
            {data.status ?
            <div>
            <h1>{data.title}</h1>
            <GameSlide props = {data}  />
            <GameInfo  props = {data}  />
            </div>
            :<h3 className='error'> Game with that ID doesn't exist !! </h3>}
        </div>
        )
    }
  }



export default GameByIdPage