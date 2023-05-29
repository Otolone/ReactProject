import React from 'react';
import './home.css';
import '../home/CTA';

import CTA from '../home/CTA';

import me from '../../assets/profile.jpg';
import HomeSocial from './homeSocial';
import {Link} from "react-router-dom";

export const Home = ()=>{
    return(
    
           <header>
            <div className='home'>
            <div className='home_container'>
                <h1>Hello I'm</h1>
                <h1>Paul Egbe Nyenty</h1>
                <h1 className='text-light'> Software Engineer </h1>
                <CTA/>
                <HomeSocial/>
                <img src={me} alt='my image'></img>
                <nav>
                
                </nav>
                <div className='my_image'>
                
                </div>
                
                
            </div>
                
            </div>
        </header>
    
        
        
        
    );
}

export default Home;
