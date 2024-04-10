import React from 'react';
import './Region.css'
import assets from '../assets';

const Region = () => {
  return (
    <div className='region'>
      <div className="videos">
        <h2>Latest Movies </h2> 
      </div>
      <div className="movies" >
      
      <div className="movie_1">
        <img src={assets.kong} />
        <h2>Godzilla x Kong: The New Empire</h2>
        <p>Godzilla and the almighty kong face a colossal threat hidden
          deep within the planet, challenging their very existence and the survival of the human race
        </p>
      </div>
      <div className="movie_2">
        <img src={assets.stranded} />
        <h2>Stranded</h2>
        <p>Most people see Nigerian Christain movies as dreary, unrealistic, stories you can’t relate to, usually acted and produced with ineptitude, however most recent Mount Zion Faith Int’l movies....</p>
      </div>
      <div className="movie_3">
        <img src={assets.audu} />
        <h2>Audu Olowo Gedu</h2>
        <p>This is a classicmovie from Baba wande. If youhave watched Toluwanile , this is yet another classic you dont wanna miss for any reason. Amovie that will opne your eyes to a lot of realities of life. watch and enjoy</p>
      </div>
      <div className="movie_4">
        
        <img src={assets.bee} />
        <h2>Beekeeper</h2>
        <p>One man's brutal campaign for vengeance takes on national stakes after it's revealed he's a former operative of a powerful and 
          clandestine organization known as Beekeepers...
        </p>
      </div>
      <div className="movie_5">
        <img src={assets.loh} />
        <h2>My name is Loh Kiwan</h2>
        <p>After defecting from North Korea, Loh Kiwan struggles to obtain refugee status in Belgium, where he encounters a dejected woman who has lost all hope</p>
      </div>
      <div className="movie_6">
        <img src={assets.kraven} />
        <h2>Kraven the Hunter</h2>
        <p>Russian immigrant Sergei Kravinoff sets
          out on a mission to prove himself as the greatest hunter in the world
        </p>
      </div>
      </div>
      </div>
  )
}

export default Region