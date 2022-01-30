import React from 'react'
import Image from 'next/image'
import Flower from './Flower'

const Apartmans = () => {
  return (
    <section id='apartmans' className='section'>
      <h2 className='sub-heading light '>
        <Flower />
        <span>Apartmanok</span>
      </h2>
      <div className='apartmans'>
        <div className='cards'>
          <div className='card-box'>
            <div className='image-container'>
              <Image
                src='/images/family.png'
                alt='family'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className='info'>
              <h3>Családi Apartman</h3>
              <p>
                Családi apartmanunkban 3 különálló szobával, amerikai konyhás
                nappalival és tágas fürdőszobával várjuk Vendégeinket.
              </p>
              <p>
                Az apartmanhoz tágas terasz és udvar tartozik, amely tökéletesen
                alkalmas a csendes nyáresti borozgatáshoz, beszélgetéshez, közös
                grillezéshez.
              </p>
              <p>A családi apartman felszereltsége:</p>
              <ul>
                <li>
                  Mindhárom szobában franciaágy, éjjeli szekrény és
                  gardróbszekrény biztosítja a Vendégek kényelmét
                </li>
                <li>
                  A jól felszerelt, tágas konyha sütésre, főzésre is alkalmas:
                  <ul>
                    <li>Étkészletek, evőeszközök, bögrék és poharak</li>
                    <li>Lábasok és serpenyők</li>
                    <li>Hűtő</li>
                    <li>Indukciós tűzhely és sütő</li>
                    <li>Mikrohullámú sütő</li>
                    <li>Kenyérpirító</li>
                    <li>Vízforraló</li>
                    <li>Kotyogós kávéfőző</li>
                    <li>Kávé, cukor, só</li>
                  </ul>
                </li>
                <li>
                  Nagyméretű ebédlőasztal, akár 12 fő részére is bővíthető
                </li>
                <li>
                  Épített zuhanyzós fürdőszoba hajszárítóval, törölközőkkel,
                  kádkilépővel
                </li>
                <li>Ágynemű (takaró, párna, kispárna) és ágyneműhuzat</li>
                <li>Plédek</li>
                <li>6 fős kertibútor garnitura</li>
              </ul>
            </div>
          </div>
          <div className='card-box'>
            <div className='image-container'>
              <Image
                src='/images/studio.jpg'
                alt='studio'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className='info'>
              <h3>Studio Apartman</h3>
              <p>
                Egylégterű studio aparmatnunkban franciaágy, éjjeli szekrény és
                gardróbszekrény biztosítja a Vendégek kényelmét.
              </p>
              <p>
                Az apartmanhoz tágas terasz és udvar tartozik, amely tökéletesen
                alkalmas a csendes nyáresti borozgatáshoz, beszélgetéshez, közös
                grillezéshez.
              </p>
              <p>A studio apartman felszereltsége:</p>
              <ul>
                <li>
                  Az apartmanban franciaágy, éjjeli szekrény és gardróbszekrény
                  biztosítja a Vendégek kényelmét
                </li>
                <li>
                  A jól felszerelt, tágas konyha sütésre, főzésre is alkalmas:
                  <ul>
                    <li>Étkészletek, evőeszközök, bögrék és poharak</li>
                    <li>Lábasok és serpenyők</li>
                    <li>Hűtő</li>
                    <li>Indukciós tűzhely és sütő</li>
                    <li>Mikrohullámú sütő</li>
                    <li>Kenyérpirító</li>
                    <li>Vízforraló</li>
                    <li>Kotyogós kávéfőző</li>
                    <li>Kávé, cukor, só</li>
                  </ul>
                </li>
                <li>
                  Épített zuhanyzós fürdőszoba hajszárítóval, törölközőkkel,
                  kádkilépővel
                </li>
                <li>Ágynemű (takaró, párna, kispárna) és ágyneműhuzat</li>
                <li>Plédek</li>
                <li>4 fős kertibútor garnitura</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='additional-info'>
          <p>Igény esetén kisgyermekes családoknak biztosítani tudjuk:</p>
          <p>Etetőszék</p>
          <p>Babakád állvánnyal</p>
          <p>Pihenőszék</p>
          <p>Gyermek étkészlet evőeszközökkel</p>
          <p>Utazóágy</p>
        </div>
      </div>
    </section>
  )
}

export default Apartmans
