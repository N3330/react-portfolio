import React from 'react'
import Nav from 'react-bootstrap/Nav';


function NavBar({ setPage }) {
  return (
    <Nav variant="tabs" defaultActiveKey="#home">
      <Nav.Item>
        <Nav.Link href="#home" onClick={() => setPage('home')}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#about" onClick={() => setPage('about')}>About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#contact" onClick={() => setPage('contact')}>
          Contact
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#resume" onClick={() => setPage('resume')}>Resume</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#portfolio" onClick={() => setPage('portfolio')}>Portfolio</Nav.Link>
      </Nav.Item>
    </Nav>
    // <div>
    //   <a href="#home" onClick={() => setPage('home')}>Home</a>
    //   <a href="#about" onClick={() => setPage('about')}>About</a>
    //   <a href="#contact" onClick={() => setPage('contact')}>Contact</a>
    //   <a href="#resume" onClick={() => setPage('resume')}>Resume</a>
    // </div>
  )
}

export default NavBar