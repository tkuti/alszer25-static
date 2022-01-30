import React from 'react'
import Flower from './Flower'

const Contact = () => {
  return (
    <section id='contact' className='section'>
      <h2 className='sub-heading'>
        <Flower />
        <span>Kapcsolat</span>
      </h2>
      <div className='contact-info'>
        <div className='map'>
          <div className='mapouter'>
            <div className='gmap_canvas'>
              <iframe
                id='gmap_canvas'
                src='https://maps.google.com/maps?q=9941%20%C5%90riszentp%C3%A9ter,%20Alszer%2025.&t=&z=17&ie=UTF8&iwloc=&output=embed'
                frameBorder='0'
                scrolling='no'
                marginHeight='0'
                marginWidth='0'
              ></iframe>
              <a href='https://2piratebay.org'></a>
              <br />
              <a href='https://www.embedgooglemap.net'>
                google map embed responsive
              </a>
            </div>
          </div>
        </div>
        <div className='contact'>
          <h3>Elérhetőségeink:</h3>
          <p>Alszer25 Vendégház</p>
          <p>Cím: 9941 Őriszentpéter, Alszer 25.</p>
          <p>06 30 282 1860</p>
          <p>alszer25vendeghaz@gmail.com</p>
        </div>
      </div>
      <div className='approach-info'>
        <h3>Megközelítés: </h3>
        <p>Vonattal:</p>
        <ul>
          <li>
            naponta több alkalommal több vonat közlekedik Őriszentpéterre,
            Zalaegerszegi átszállással
          </li>
        </ul>
        <p>Autóval:</p>
        <ul>
          <li>Zalaegerszeg – Zalalövő – Őriszentpéter</li>
          <li>Szombathely – Körmend – Csákánydoroszló – Őriszentpéter</li>
          <li>Szentgotthárd – Őriszentpéter</li>
        </ul>
        <p>Vendégház megközelítése a településen belül:</p>
        <ul>
          <li>
            {' '}
            bármelyik irányból érkezik Őriszentpéterre, keresse meg a település
            központjában elhelyezkedő körforgalmat, amelyből Körmend irányába
            hajtson ki. Néhány száz méter után, a hidat elhagyva kanyarodjon be
            az első utcába jobbra, a Mentőállomás mellett. Körülbelül 300 m
            múlva balra kanyarodjon be az utcába, és felfelé haladva, az Y
            kereszteződésnél, pont szemben találja a Vendégházat. A
            kereszteződésnél hajtson tovább egyenesen, és az utca végén, jobb
            kéz felől találja a parkolót.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
