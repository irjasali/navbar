import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ItemsListCart from '../ItemsListCart/ItemsListCart';
import { ImHome } from "react-icons/im";
import { ImNewspaper } from "react-icons/im";
import './styles.css';


const Navbarcomp = () => {
    return (
        <>
            <Navbar variant="dark" bg="primary" expand="lg"  sticky="top" className='colorNav'>
            <img src="/img/logohamacas.png"
                     width="100"
                     height="60"
                     alt="React Bootstrap logo"
                     className="d-inline-block align-top logo_main"
            />
             <Container >
                    <Navbar.Brand href="#home"  > Southern Hammocks </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="#home"><ImHome /> Inicio</Nav.Link>
                        <Nav.Link href="#link"> <ImNewspaper /> Acerca de</Nav.Link>
                            <NavDropdown title="Categoria" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1"> Categoria 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"> Categoria 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"> Categoria 3</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4"> Categoria 4</NavDropdown.Item>
                            </NavDropdown>
                        <Nav.Link href="#link"> Contacto</Nav.Link>    
                        </Nav>
                    </Navbar.Collapse>
                     <ItemsListCart counter={"72"}/> 
                </Container>
            </Navbar></>
    )
}

export default Navbarcomp;