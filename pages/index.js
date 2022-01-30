import Head from 'next/head'
import Image from 'next/image'
import About from '../components/about'
import Apartmans from '../components/Apartmans'
import PricesBooking from '../components/PricesBooking'
import Galery from '../components/Galery'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alszer25 Vendégház</title>
        <meta
          name='description'
          content='Alszer25 vendégház, kiadó apartmanok'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <div className='image-wrapper'>
          <Image
            src='/images/carousel/1.jpg'
            alt='kep1'
            layout='fill'
            objectFit='cover'
            priority
          />
          <div className='info'>
            <h1 className='heading'>Alszer25 Vendégház</h1>
            <h2 className='sub-heading'>- Őriszentpéter - </h2>
          </div>
        </div>
      </header>
      <div className='content'>
        <About />
        <Apartmans />
        <PricesBooking />
        <Galery />
        <Contact />
      </div>
    </div>
  )
}
