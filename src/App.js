import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Web3 from 'web3'
import _ from 'lodash'
import {Navbar, Jumbotron, Button, Nav, NavItem, NavDropdown,
  MenuItem, FormGroup, FormControl} from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import elasticsearch from 'elasticsearch'

var web3 = require('web3');
//var elasticsearch = require('elasticsearch')

const esClient = new elasticsearch.Client({
  host: '127.0.0.1:9200/customer',
  log: 'error'
})

class App extends Component {

  constructor(props) {
    super(props);
       this.state = { contractJson:[], results:[], IPFSContract:'', IPFSText: '--',
      ETHEREUM_CLIENT: 'a', UserMessage: [],
      contractAddress: '0x8d3e374e9dfcf7062fe8fc5bd5476b939a99b3ed',
      ZsendAddress:'0xd73e172751e751d274037cb1f668eb637df55e33',ZsendContract:''}

    this.Login = this.Login.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

Login() {
  var username = this.inputUserName.value;
  var password = this.inputPassword.value;
  console.log("username = ", username)
  console.log("pwd = ", password)

}
handleChange (  ) {
//  const search_query = event.target.value
  var searchQ = this.searchParm.value;
var search_queryES="name:" + searchQ + "*"
  esClient.search({
    q: search_queryES
  }).then(function ( body ) {
    this.setState({
      results: body.hits.hits
    })
    console.log(this.state.results)
  }.bind(this), function ( error ) {
    console.trace( error.message );
  });
}
  render() {
    var products=[];
    for (var i = 0; i < this.state.results.length; i++) {
       var  customerName =  this.state.results[i];
       var cname = customerName._source.name;
          products.push({ 'name':   cname  });
        }
       var tableHtml =
    <BootstrapTable data={products} striped={true} hover={true}>
        <TableHeaderColumn dataField="name" isKey={true} dataAlign="center" dataSort={true}>Name</TableHeaderColumn>

      </BootstrapTable>
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
       <FormControl inputRef={(input) =>  this.searchParm = input}
       type="text" placeholder="Search" />
     </FormGroup>
     {' '}

     <Button type="submit" onClick={() => this.handleChange()}>Search</Button>

   </Navbar.Form>

<Navbar.Form pullRight>
  <FormGroup>
    <FormControl inputRef={(input) =>  this.inputUserName = input}
    type="text" placeholder="User Name" />
    <FormControl inputRef={(input) =>  this.inputPassword = input}
     type="text" placeholder="Password" />
  </FormGroup>
  {' '}
  <Button type="submit" onClick={() => this.Login()}>Login</Button>
</Navbar.Form>
</Navbar.Collapse>
  </Navbar>
);
    return (
      <div  >
        {navbarInstance}
        <div>
          {tableHtml}
        </div>
      </div>
    );
  }
}

export default App;
