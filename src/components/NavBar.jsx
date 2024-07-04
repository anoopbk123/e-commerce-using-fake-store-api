import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";
import { useState } from "react";

function NavBar({setProductSearch}) {
  const [searchInput, setSearchInput] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault()
    setProductSearch(searchInput)
  }

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/cart">Cart</Nav.Link>
          </Nav>
          <Form inline onSubmit={handleSubmit}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search Product"
              className=" mr-sm-2"
              value={searchInput}
              onChange={(e)=>{
                setSearchInput(e.target.value)
              }}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Search</Button>
          </Col>
        </Row>
      </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
