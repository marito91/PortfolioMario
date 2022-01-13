import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';


// CSS
import '../static/css/Header.css';


export default function Header() {
    return (
        <>
        <Navbar className="navbar" expand="lg">
            <Container>
                <Navbar.Brand href="/">Mario Gomez</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="https://github.com/marito91">GitHub</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/mario-gomez-a5b131187/">LinkedIn</Nav.Link>
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                    <NavDropdown.Item href="https://tinyurl.com/2v7z9j52">Konoha Center</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">Plataforma Transporte Fluvial</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">Sistema de Gestión de Notas</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}



