import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Asset Tracker</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default Header;
