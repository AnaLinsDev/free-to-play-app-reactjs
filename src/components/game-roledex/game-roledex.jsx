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
        gameFilterName : props.filtro,
        category : props.category
    }
    }

    UNSAFE_componentWillReceiveProps(newProps){
        this.setState( {gameFilterName : newProps.filtro} )
        
        fetch(`https://www.freetogame.com/api/games?category=${this.state.category}`)
        .then(res => res.json())
        .then((out) => {
            this.setState( {games: out.filter(game => game.title.toLowerCase().startsWith(this.state.gameFilterName))})})
        .catch(err => { throw err });
        
    }

    componentWillMount(){

        fetch(`https://www.freetogame.com/api/games?category=${this.state.category}`)
        .then(res => res.json())
        .then((out) => {
            this.setState( {games: out })})
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
              items: 5,
              slidesToSlide: 1 
            }
          };

        return ( 
        <div className="gamesListByCategory">
            {this.state.games[0] ?
                <div>
                <h1>{this.state.category}</h1>
                <Carousel 
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                infinite={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                >
                
                {
                this.state.games.map(({id, ...otherProps }) => (
                    
                        <GameItem key={id} id={id} {...otherProps} />
                    
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