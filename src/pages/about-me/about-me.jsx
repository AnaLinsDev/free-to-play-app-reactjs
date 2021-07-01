import React from 'react';
import './about-me.scss'
import imageBrasil from '../../assets/bandeira-brasil.jpg'
import imageUSA from '../../assets/bandeira-usa.jpg'

const AboutMePage = ({}) => (
    <div className='about-me'>
        <h3>Sobre mim <img src={imageBrasil} alt="imageBrasil" className='image' /></h3> 
        <p className='info'> Olá! Meu nome é Ana Júlia, esse site foi feito para inicializar a prática sozinha dos conhecimentos em ReactJS.</p>
        <h3>About me <img src={imageUSA} alt="imageUSA" className='image' /></h3>
        <p className='info'> Hello! My name is Ana Júlia, this website was made to practice my knowledge in ReactJS by myself.</p>
    </div>
)


export default AboutMePage;