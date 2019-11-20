import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./Navigation.css";
import Play from "../images/play.png";

class Navigation extends React.Component {
  
  render() {
    const { search, submit } = this.props;

    return (
      <div>
        <Navbar className="navbar navbar-dark" expand="lg">
          <a href="index.html" className="navbar-brand">
            <img src={Play} style={{ width: 100, height: 78 }} alt="logo" />
            <p className="brand-name">Play Space</p>
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline className="form" onSubmit={submit}>
              <FormControl
                type="text"
                placeholder="Search Games"
                className="mr-sm-2 main-input"
                style={{ fontSize: "1.3rem", fontWeight: 300 }}
                onChange={search}
              />
              <Button className="main-btn" variant="outline-light" type="submit" onSubmit={submit}>
                Search
              </Button>
            </Form>

            <Nav className="ml-auto">
              <Nav.Link className="navlink" href="#home">
                Login
              </Nav.Link>
              <Nav.Link className="navlink" href="#link">
                Signup
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
