import React from 'react'
import data from '../helper/data.js'

const Gallery = () => {

  return (
    <div className='image-container'>
        {data.map((item, i) => (

            <div key = {i}>
                <div className='image-item'>
                    <img src={item.src.large}/>
                </div>
                <div className='info-name'>
                    <p>{item.photographer}</p>
                </div>
            </div>
            

        ))}
    </div>
  )
}

export default Gallery
