import me from '../../assets/profile.jpg';
import CTA  from './CTA';
import  HomeSocial from './HomeSocial';


import React from 'react';



export const HomePage = ()=>{
    return(
        
      <div className="App">
      <header className="App-header">
        <img src={me} className="" alt="logo" />
        <CTA/>
         <HomeSocial/>
        </header>               
    </div>
        
    );

}
export default HomePage;
