import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import './App.css';
import axios from 'axios';
export default class App extends Component {
  state = {
    email: "",
    password:""
  }

  onSubmit = () => {
    var email = this.state.email;
    var password = this.state.password;

    var data = {
      "email": this.state.email,
      "password": this.state.password
    }
    axios.post("https://reqres.in/api/login", { "email": email,
    "password": password })
      .then(res => {
        alert("token :"+res.data.token);
        console.log(res);
        console.log(res.data.token);
      }).catch(err=>{
        alert("error : "+err.response.data.error);
      })
    
  };
  render(){
  return (
    <div>
        <div>
          <Navbar className='navbar' collapseOnSelect expand="lg"  variant="dark">
            <Container>
            <Navbar.Brand href="">
              <span id='logo'>
                ATools<span id='dot'>.</span>
              </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav id='fl'>
                <Nav.Link href="">
                  <button id='button1'>
                    Start Free Trial
                  </button>
                </Nav.Link>
                <Nav.Link eventKey={2} href="">
                  <button id='button2'>
                    Login
                  </button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Container fluid>
            <Row>
              <Col xs={12} md={5}>
                <div id='o'>
                  <h2>Welcome Back</h2>
                  <p id='subtext'>Login page goes here</p>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Email Address*" onChange={e => this.setState({ email: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Password*" onChange={e => this.setState({ password: e.target.value })} />
                    </Form.Group>

                    <button type="button" id='buttons' onClick={this.onSubmit}>
                      Login
                    </button>

                  </Form>
                  <input type="checkbox"/>
                  <span id='rempass'>
                  Remember Password
                  </span>
                  <a id="forpass" href=''>
                    Forgot Password?
                  </a>
                </div>
              </Col>
              <Col xs={0} md={7}>
                <div id="n">

                </div>
              </Col>
            </Row>
          </Container>
        </div>
    </div>
  );
  }
}

// export default App;
