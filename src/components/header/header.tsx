import React from 'react';
import './header.css';
import './CTA';

import CTA from './CTA';

import me from '../../assets/profile.jpg';
import HeaderSocial from './HeaderSocial';

export const Header = ()=>{
    return(
        <header>
            <div className='container header_container'>
                <h5>Hello I'm</h5>
                <h1>Paul Egbe Nyenty</h1>
                <h5 className='text-light'> Software Engineer </h5>
                <CTA/>
                <HeaderSocial/>
                <div className='my_image'>
                    <img src={me} alt='my image'></img>
                </div>
                <a href="#contact" className='scroll_down'>scroll down</a>
            </div>
        </header>
    )
}

export default Header;