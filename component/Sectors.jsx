import React from 'react';
import { ArrowRight, MoveUpRight } from 'lucide-react';
import './Sectors.css';




const Sectors = ({image,head, title,info, date,more}) => {
  return (
    <div className='sector'>
        <img 
        className='sector_img'
        src={image} />

        <div className='sector_head'>
           <h3>{head}</h3>
        

        <div className="sector_details">
            {title} 
        </div>
<div className="sector_arr">
        <div className="sector_head">
            <h2>{info}</h2>
       
        
    </div>
    <div className="sector_date">
      <div className="left">
         <p>{date}</p> 
    </div>
    <button className='readmore_btn'>
        <h4>Read More</h4>
        <MoveUpRight Name='arrow' color='#fff' size={16} />
      </button>  
       
    </div>

    </div>
    
    </div>
    </div>
  )
}

export default Sectors