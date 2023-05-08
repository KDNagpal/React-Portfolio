import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar({ currentPage, handlePageChange }) {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            My Portfolio
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              onClick={() => handlePageChange('Home')}
              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#projects"
              onClick={() => handlePageChange('Projects')}
              className={
                currentPage === 'Projects' ? 'nav-link active' : 'nav-link'
              }
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={
                currentPage === 'Resume' ? 'nav-link active' : 'nav-link'
              }
            >
              Resumé
            </Nav.Link>
            <Nav.Link
              href="#contactme"
              onClick={() => handlePageChange('ContactMe')}
              className={
                currentPage === 'MyRentals' ? 'nav-link active' : 'nav-link'
              }
            >
              Contact me
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
