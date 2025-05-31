import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const AppNavbar = ({ searchTerm, setSearchTerm }) => {
   const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/movies'); // always redirect to Movies when searching
  };
  
  return (
    <Navbar expand="lg" className=" d-flex align-items-center navbar" fixed="top">
      <Container fluid>
        <Navbar.Brand >
          <img src="https://www.clipartmax.com/png/middle/1-10021_clipart-movies-hd-movies-logo-transparent.png" alt="" className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" className='navbar-links'>HOME</Nav.Link>
            <Nav.Link as={Link} to="/movies" className='navbar-links'>MOVIES</Nav.Link>

            <Nav.Link href="#" className='navbar-links'>
              SERIES
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
               onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar