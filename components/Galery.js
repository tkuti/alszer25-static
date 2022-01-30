import React from 'react'
import Image from 'next/image'
import Flower from './Flower'

const Galery = () => {
  const familyImages = [1, 2, 3, 4]
  const studioImages = [1, 2, 3, 4]

  return (
    <section id='galery' className='section'>
      <h2 className='sub-heading light'>
        <Flower />
        <span>Galéria</span>
      </h2>
      <h3>Családi apartman</h3>
      <div className='image-container'>
        {familyImages.map(img => (
          <div key={img} className='image'>
            <Image
              src={`/images/family/${img}.jpg`}
              alt={`family apartman ${img}`}
              layout='fill'
              objectFit='cover'
            />
          </div>
        ))}
      </div>
      <h3>Studio apartman</h3>
      <div className='image-container'>
        {studioImages.map(img => (
          <div key={img} className='image'>
            <Image
              src={`/images/studio/${img}.jpg`}
              alt={`studio apartman ${img}`}
              layout='fill'
              objectFit='cover'
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Galery
