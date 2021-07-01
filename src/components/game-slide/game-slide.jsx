import React from 'react';
import './game-slide.scss'
import { Slide } from 'react-slideshow-image';

const GameSlide = ({props}) => (
    <div className='collection_games_slide'>
        
        {/* Só será mostrado o slide, se a API tiver imagens no "props.screenshots"(no game de id 17 não há, por exemplo ) */}
            {props.screenshots[0]? 
            <Slide easing="ease">
                {props.screenshots.map(item => (   

                <div  key={item.id}  className='image' 
                style={{ backgroundImage: `url(${item.image})` }}/>

                ))}
            </Slide>
            :''}
        

    </div>
)

export default GameSlide