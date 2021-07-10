import React from 'react';
import './game-roledex.scss'
import GameItem from '../../components/game-item/game-item'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

class GameRoledex extends React.Component {
    constructor(props){
    super(props)
    this.state = {
        games : [],
        gamesFilter : [],
        gameFilterName : '',
        category : props.category
    }
    }

    UNSAFE_componentWillReceiveProps(newProps){
            this.setState( {gamesFilter: this.state.games.filter(game => 
                game.title.toLowerCase().startsWith(newProps.filtro))})
    }

    componentWillMount(){

        fetch(`https://www.freetogame.com/api/games?platform=all&category=${this.state.category}&sort-by=popularity`)
        .then(res => res.json())
        .then((out) => {
            this.setState( {games: out })
            this.setState( {gamesFilter : out} )
        })
        .catch(err => { throw err });
    }

    render(){
        const responsive = {
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 5,
              slidesToSlide: 1 
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 5,
              slidesToSlide: 1 

            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 2,
              slidesToSlide: 1 
            }
          };

        return ( 
        <div className="gamesListByCategory">
            {this.state.gamesFilter[0] ?
                <div>
                <h1>{this.state.category}</h1>
                <Carousel 
                draggable={false}
                customTransition='transform 350ms ease-in-out'
                transitionDuration={350}
                centerMode={true}
                responsive={responsive}
                infinite={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={['mobile', 'tablet']}
                deviceType={this.props.deviceType}
                >
                
                {
                this.state.gamesFilter.map((game) => (
                    
                        <GameItem key={game.id} game={game} />

                ))
                }
                </Carousel>
                <hr></hr>
                </div>
                :''}
                
        </div>
        )
    }
}



export default GameRoledex
