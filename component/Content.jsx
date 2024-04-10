import React from 'react';
import './Content.css';
import assets from '../assets';
import Sectors from './Sectors';



const article =[
    {id:1, image:assets.expert, head:"Expert Comment", title:"Britain must rearm to strengthen NATO and meet threats beyond Russia and terrorism", info:"As NATO celebrates its 75th anniversary, the UK must overcome its capability gapds to boost the alliance's deterrence power and account for threats like China", date:"25 MARCH 2024 - 3 MINUTE READ" },
    {id:2, image:assets.next, head:"Expert Comment", title:"Maduro is flouting his commitment to hold free elections in Venezuela. The Us must respond - carefully", info:"An April deadline for a decision to 'snap back' US and EU sanctions is approaching. The Biden administration must reimpose some meausres-but in the careful, calibrated fasshion", date:"24 MARCH 2024 - 4 MINUTE READ" },
    {id:3, image:assets.next3, head:"Expert Comment", title:"Israel and Palestine", info:"Research includes work on the opening peace process, Palestine's accession to the ICC, and the constantly evolving situation in Gaza.", date:"25 MARCH 2024 - 3 MINUTE READ" },
    {id:4, image:assets.next4, head:"Expert Comment", title:"US foreign policy", info:"US global influence remains strong in deadline- especially economically-as China, India and Russia begin to exert more influence.", date:"25 MARCH 2024 - 3 MINUTE READ" },
    {id:5, image:assets.next5, head:"Audio", title:"Independent Thinking: Has Turkey turned against Recep Tayyip Erodgan?", info:"Turkey's voters moved decisively against President Erdogan in the local elections. Does this give an opening to the opposition in 2028?", date:"5 APRIL 2024 - 30 MINUTE LISTEN" },
    {id:6, image:assets.next6, head:"Expert Comment", title:"Britain must rearm to strengthen NATO and meet threats beyond Russia and terrorism", info:"As NATO celebrates its 75th anniversary, the UK must overcome its capability gapds to boost the alliance's deterrence power and account for threats like China", date:"25 MARCH 2024 - 3 MINUTE READ" },
     
]

const Content = () => {
  return (
    <div className='content'>
        <div className="content_top">
            <h2>Top News</h2>
        </div>
        <div className="content_summary">
           {article.map(item => (
            <Sectors
            key={item.id}
            image={item.image}
            head={item.head}
            title={item.title}
            info={item.info}
            date={item.date}
            more={item.more} />
           ))} 
        </div>
    </div>
  )
}

export default Content