import React from 'react';
import Header from './component/Header';
import './index.css';
import Content from './component/Content';
import Sectors from './component/Sectors';
import Region from './component/Region';
import Fun from './component/Fun';
import Footer from './component/Footer'


function App  () {
  return (
    <>
    <Header />
    <div className="container">
    <Content />
    <Sectors />
    
    <div className="media_2">
      <Region />
      <Fun />
      <Footer />
    </div>
   
    
    </div>
    
    </>
    
  )
}

export default App