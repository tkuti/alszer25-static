import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section id='about' className='section'>
      <div className='image-container'>
        <Image
          src='/images/sunflower.png'
          alt='kep1'
          width={200}
          height={150}
        />
      </div>
      <h2>
        Üdvözöljük az <span>Alszer25 Vendégház</span> oldalán!
      </h2>
      <div className='image-container'>
        <Image
          src='/images/sunflower.png'
          alt='kep2'
          width={200}
          height={150}
        />
      </div>
      <p className='intro'>
        Szeretne kiszakadni a rohanó hétköznapokból és természetközeli
        környezetben kikapcsolódni, feltöltődni? Szeretne családjával,
        barátaival eltölteni néhány önfeledt napot az ország egyik
        legérintetlenebb, legcsendesebb tájegységének végeláthatatlan erdőiben,
        mezőin? Szeretné élvezni a családi, baráti kirándulásokat, kerékpározást
        hazánk egyik természeti kincsekben, történelmi múltat idéző értékekben,
        kulturális és szakrális látnivalókban gazdag tájegységén? Szeretne
        megkóstolni a hajdinás vargányalevest, a dödöllét, a tökmagolajos
        salátát, a hőkkünsütt kerek perecet vagy a tökös-mákos rétest? Netán
        résztvenne az elkészítésükben is? Akkor szeretettel üdvözlöm az
        Őrségben! Alszer25 Vendégházunk egy 6 fős családi apartmannal és egy 2
        fős studio apartmannal várja a vidéki kikapcsolódásra és töltődésre váró
        Vendégeket
      </p>
    </section>
  )
}

export default About
