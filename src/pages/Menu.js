import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import Planetas from './Planetas';
import Estrelas from './Estrelas';
import Galaxias from './Galaxias';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';


export default function Menu(){
return(
    <>
      <BrowserRouter>
        <div>
            <Navbar color="secondary" dark expand="md">
                <NavbarBrand href="/">HOME</NavbarBrand>
                <NavbarBrand href="Galaxias/">GALÁXIA</NavbarBrand>
                <NavbarBrand href="/Planetas">PLANETAS</NavbarBrand>
                <NavbarBrand href="/Nebulosas">NEBULOSAS</NavbarBrand>
                <NavbarBrand href="/Estrelas">ESTRELAS</NavbarBrand>
            </Navbar>
        </div>

        <Route path="/Home" exact component={Home}/>
        <Route path="/Planetas/" component={Planetas}/>
        <Route path="/Estrelas/" component={Estrelas}/>
        <Route path="/Galaxias/" component={Galaxias}/>

      </BrowserRouter>
        </>
    );
}