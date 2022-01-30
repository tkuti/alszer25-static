import React from 'react'
import Navigation from './Navigation'

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
          {children}
      </main>
      <footer className='footer'>
         ITT MAJD VALAMI LESZ
      </footer>
    </>
  )
}

export default Layout
