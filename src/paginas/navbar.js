import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import  { useEffect } from 'react'; // Asegúrate de importar useEffect
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbars = () => {
   
    return (
/*
        <nav class="navbar navbar-expand-lg text-uppercase fixed-top"  id="mainNav">
            <div class="container" >
                <a class="navbar-brand" style={{color: '#FFFFFF'}} href="/allyprice">AllyPrice</a>
                <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                    <li class="nav-item mx-0 mx-lg-1"><Link to='/allyprice/registro' className='' class="nav-link py-2 px-0 px-lg-2 rounded">Registro</Link></li>
                    <li class="nav-item mx-0 mx-lg-1"><Link to='/allyprice/Login' className='' class="nav-link py-2 px-0 px-lg-2 rounded">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>*/
        <nav class="navbar text-uppercase fixed-top"  id="mainNav">

        <Container>
          <Navbar.Brand href="/allyprice">AllyPrice</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/allyprice/Registro">Registro</Nav.Link>
            <Nav.Link href="/allyprice/Login">Login</Nav.Link>
          </Nav>
        </Container>

      </nav>
    )
}

export default Navbars
