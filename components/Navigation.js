import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Image from 'next/image'

const Navigation = () => {
  return (
    <Navbar bg='light' expand='lg' fixed='top'>
      <Navbar.Brand href='#'>
        <div className="logo">
        <Image src='/images/logo.png' width={100} height={60} alt='logo' />
        </div>
      </Navbar.Brand>
      <Navbar.Brand href='#' className='title'>Alszer25</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'></Nav>
        <Nav className='me-auto'>
          <Nav.Link href='#about' className='link'>
            Rólunk
          </Nav.Link>
          <Nav.Link href='#apartmans' className='link'>
            Apartmanok
          </Nav.Link>
          <Nav.Link href='#prices-booking' className='link'>
            Árak és foglalás
          </Nav.Link>
          <Nav.Link href='#galery' className='link'>
            Galéria
          </Nav.Link>
          <Nav.Link href='#contact' className='link'>
            Kapcsolat
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
