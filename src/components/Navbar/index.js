import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

const Nav = () => {
  return (
    <Navbar bg="dark" style={{ marginBottom: '30px' }}>
      <Container>
        <Navbar.Brand style={{ color: '#ffffff' }} href="#home">
          Brand link
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Nav
