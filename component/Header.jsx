import React from 'react';
import {Menu, Search, Sun} from 'lucide-react';
import './Header.css'



const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
            <h1>TM.</h1>
            <h2>TechnicalMeedia</h2>
            </div>  
            <div className="center">
               
                <input type='text' name='search' placeholder='Search for more news, music and videos......'>
                    
                </input>
                <ul>
                    <p>Home</p>
                    <p>Blog</p>
                    <p>Movies</p>
                    <p>Music</p>
                    <p>Lyrics</p>
                    <p>Latest News</p>
                    <p>Advertisement</p>
                </ul>
               
            </div>
          
            <div className="header_icons">
                <Sun size={20} className='on' />
                 <Search size={20} className='more'/>
                 </div>
                
                
            
            
        </div>
    
  )
}

export default Header