import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='#home'>The Learnings</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/Random'>Random</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
