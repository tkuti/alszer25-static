import React from 'react'
import Flower from './Flower'

const PricesBooking = () => {
  return (
    <section id='prices-booking' className='section'>
      <h2 className='sub-heading '>
        <Flower />
        <span>Áraink</span>
      </h2>
      <div className='prices cards'>
        <div className='card-box'>
          <h3>Családi apartman</h3>
          <p>A családi apartman 6 férőhelyes, lehetőség van pótágyazásra.</p>
          <p>Minimum 2 éjszakára foglalható.</p>
          <p className='price'>Ára: 40 000 Ft / éj / apartman</p>
        </div>
        <div className='card-box'>
          <h3>Studio apartman</h3>
          <p>A studo apartman 2 férőhelyes, lehetőség van pótágyazásra.</p>
          <p>Minimum 2 éjszakára foglalható.</p>
          <p className='price'>Ára: 15 000 Ft / éj / apartman</p>
        </div>
      </div>
      <div className='booking'>
        <h2 className='sub-heading '>
          <Flower />
          <span>Foglalás, lemondás</span>
        </h2>
        <p>
          Szabad időpontjaink és árajánlatkérés céljából, kérjük, hogy írjon
          nekünk e-mailt az alszer25vendeghaz@gmail.com e-mail címre, vagy
          hívjon minket a 06 30 282 1860-as telefonszámon.
        </p>
        <p>
          Foglalás esetén, kérjük, hogy legyen kedves jelezni az egyéni
          igényeket, valamint az érkezés várható időpontját, hogy megfelelően
          fel tudjunk készülni a fogadásukra.
        </p>
        <p>
          A foglalást követően a teljes szállásdíj 50%-át kérjük befizetni
          előlegként, a foglaláskor egyeztetett módon, a foglalást követő 3
          munkanapon belül.
        </p>
        <p>
          Amennyiben foglalását az érkezés napjától számított 30 napon belül
          mondja le, úgy a fogalalót nem áll módunkban visszatéríteni.
        </p>
        <p>
          Az érkezés napjától számított 30 napon túli visszamondás esetén a
          foglalót teljes összegben visszatérítjük.
        </p>
      </div>
    </section>
  )
}

export default PricesBooking
