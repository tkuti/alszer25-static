import React from 'react'
import Image from 'next/image'

const Flower = () => {
  return (
    <div className='flower-wrapper'>
      <Image
        src='/images/sunflower.png'
        alt='sunflower'
        layout='fill'
        objectFit='cover'
      />
    </div>
  )
}

export default Flower
