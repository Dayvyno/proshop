import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Container} from 'react-bootstrap'

const Header = () => {
  return (
    <header>      
      <Navbar bg="success" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to={'/'}>
            <Navbar.Brand className='col'>
              <span className="material-icons">home</span>DayveShop
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" className="col justify-content-end">
            <Nav>
              <LinkContainer to={'/cart'}>
                <Nav.Link className='flex f'>
                  <span className="col material-icons">shopping_cart</span>cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/login'}>
                <Nav.Link >
                  <span className="col material-icons">perm_identity</span>sign in
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header