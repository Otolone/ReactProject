import React from 'react';

export const About = ()=>{
    return(
        <header>
            <div className='container header_container'>
                <h5>A brief story</h5>
                <p>
                    Initialy started as a high school Math teacher. At a seminar on
                    integrating IT into the classroom, the idea of getting into rogramming 
                    was born. Worked on small projects in Silicon Mountain, Cameroon.
                    I have more than twenty years of software development.

                </p>
                
                <a href="#contact" className='scroll_down'>scroll down</a>
            </div>
        </header>
    )
}

export default About;