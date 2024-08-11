import React from 'react'
import Navbar from '../components/Navbar';
import Collage from '../components/Collage';
function Gallery() {
  return (
    <div>
        <Navbar/>
        <div className="container">
        <Collage/>
        </div>
    </div>
  )
}

export default Gallery;