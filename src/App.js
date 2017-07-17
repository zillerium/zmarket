import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Web3 from 'web3'
import _ from 'lodash'
import {Navbar, Jumbotron, Button, Nav, NavItem, NavDropdown,
  MenuItem, FormGroup, FormControl} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

var web3 = require('web3');




class App extends Component {
  render() {
    const navbarInstance = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Zillerium</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">Link</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Navbar.Collapse>
   <Navbar.Form pullLeft>
     <FormGroup>
       <FormControl type="text" placeholder="Search" />
     </FormGroup>
     {' '}
     <Button type="submit">Submit</Button>
   </Navbar.Form>

<Navbar.Form pullRight>
  <FormGroup>
    <FormControl type="text" placeholder="User Name" />
    <FormControl type="text" placeholder="Password" />
  </FormGroup>
  {' '}
  <Button type="submit">Login</Button>
</Navbar.Form>
</Navbar.Collapse>
  </Navbar>
);
    return (
      <div  >
        {navbarInstance}
      </div>
    );
  }
}

export default App;
