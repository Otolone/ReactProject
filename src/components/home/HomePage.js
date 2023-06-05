import me from '../../assets/profile.jpg';
import CTA  from './CTA';
import  HomeSocial from './HomeSocial';


import React from 'react';



export const HomePage = ()=>{
    return(
        
      <div className="App">
      <header className="App-header">
        <h1>Hi, I am Nyenty Paul</h1>
        <img src={me} className="about_me_image" alt="logo" />
        <CTA/>
         <HomeSocial/>
        </header>               
    </div>
        
    );

}
export default HomePage;
