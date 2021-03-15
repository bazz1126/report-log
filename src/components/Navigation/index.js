import React from 'react';
import {Nav, Navbar, } from 'react-bootstrap';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/home">Report Log</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/account">Account</Nav.Link>
        <Nav.Link href="/admin">Admin</Nav.Link>
        <Nav.Link href="/addreport">Add Report</Nav.Link>
        <Nav.Link href="/reportlist">Report List</Nav.Link>
      </Nav>
      <span class="float-right">
        <SignOutButton/>
      </span>
  </Navbar>

);

const NavigationNonAuth = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Report Log</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="mr-auto">
        <Nav.Link href="/">Landing</Nav.Link>
        <Nav.Link href="/signin">Sign In</Nav.Link>
      </Nav>
  </Navbar>

);

export default Navigation;
