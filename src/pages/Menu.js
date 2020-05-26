import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import Planetas from './Planetas';
import Estrelas from './Estrelas';
import Galaxias from './Galaxias';
import Nebulosas from './Nebulosas';
import Home from './Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  
    Navbar,
    NavbarBrand,
} from 'reactstrap';


export default function Menu(){
return(
    <>
        <BrowserRouter>
            <div>
                <Navbar color="secondary" dark expand="md">
                <Link to="/home"><NavbarBrand href="/"> Home</NavbarBrand></Link>
                <Link to="/Galaxias"><NavbarBrand href="/Galaxias">GALÁXIA</NavbarBrand></Link>
                <Link to="/Planetas"><NavbarBrand href="/Planetas">PLANETAS</NavbarBrand></Link>
                <Link to="/Nebulosas"><NavbarBrand href="/Nebulosas">NEBULOSAS</NavbarBrand></Link>
                <Link to="/Estrelas"><NavbarBrand href="/Estrelas">ESTRELAS</NavbarBrand></Link>
                </Navbar>
            </div>

            <Route path="/" exact component={Home}/>
            <Route path="/Planetas/" component={Planetas}/>
            <Route path="/Estrelas/" component={Estrelas}/>
            <Route path="/Galaxias/" component={Galaxias}/>
            <Route path="/Nebulosas/" component={Nebulosas}/>



        </BrowserRouter>



        </>
    );
}