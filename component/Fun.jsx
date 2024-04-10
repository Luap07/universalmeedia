import React from 'react';
import './Fun.css';
import assets from '../assets';


const Fun = () => {
  return (
    <div className='music'>
        <div className="music_top">
      <h2>Gospel Songs</h2>
        </div>
        <div className="music_menu">
        <div className="music_first">
        <img src={assets.emperor} />
        <h2>Title: Emperor of the universe</h2>
        <h3>Artiste: Dunsin Oyekan ft. Theophilus Sunday</h3>
        </div>
        <div className="music_second">
            <img src={assets.friday} />
            <h2>Title: Groove session part2</h2>
            <h3>Artiste:Emma OMG ft. Adeyinka Alaseyori ft. Bidemi Olaoba</h3>
        </div>
        <div className="music_third">
            <img src={assets.oyor} />
            <h2>Title: Chant </h2>
            <h3>Artiste:Lawrence Oyor</h3>
        </div>
        <div className="music_fourth">
            <img src={assets.dunsin} />
            <h2>Title:Kei Yadosh</h2>
            <h3>Dunsin Oyekan</h3>
        </div>
        <div className="music_fifth">
            <img src={assets.bassey} />
            <h2>Title: Ebenezer</h2>
            <h3>Artiste:Nathaniel Bassey</h3>
        </div>
        <div className="music_sixth">
            <img src={assets.tosin} />
            <h2>Title: Unlimited Praise</h2>
            <h3>Artiste: Tosin Bee</h3>
        </div>
        </div>
        </div>
  )
}

export default Fun