import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../actions/userAction'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'

const Header = () => {

  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler =()=>{
    dispatch(logout())
  }

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
              {userInfo? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer variant="success" to='/profile'>
                    <NavDropdown.Item className='dropdownLink'>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item className='dropdownLink' onClick={logoutHandler}>
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              ):
              <LinkContainer to={'/login'}>
                <Nav.Link >
                  <span className="col material-icons">perm_identity</span>sign in
                </Nav.Link>
              </LinkContainer>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header