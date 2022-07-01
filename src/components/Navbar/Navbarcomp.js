import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ItemsListCart from '../ItemsListCart/ItemsListCart';
import { ImHome } from "react-icons/im";
import { ImNewspaper } from "react-icons/im";
import { GiMoebiusTriangle } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import './styles.css';


const Navbarcomp = () => {
    return (
        <><div>
        </div><Navbar variant="dark" bg="primary" expand="lg"  sticky="top"  className='colorNav'>
                {/* <img
                    src="logo.svg"
                    width="100"
                    height="30"
                    className="d-inline-block align-top logo_main"
                    alt="React Bootstrap logo" /> */}
                <GiMoebiusTriangle className='triangle' />
                <Container>
                    <Navbar.Brand href="#home">BuyOnline</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="#home"> <ImHome />  Inicio</Nav.Link>
                            <Nav.Link href="#link"> <ImNewspaper />  Acerca de </Nav.Link>
                            <NavDropdown title="Categoria" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Categoria 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Categoria 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Categoria 3</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Categoria 4</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                   <AiOutlineShoppingCart className='yellow'/>
                   <ItemsListCart counter={'72'}/>
                </Container>
            </Navbar></>
    )
}

export default Navbarcomp;