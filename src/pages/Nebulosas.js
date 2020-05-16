import React from 'react';
import Menu from './Menu';
import imgFundo from '../img/Nebulosas.jpg';

export default function Nebulosas() {

    return(
    <>
        <Menu/>
        <img src={imgFundo} width="100%"/>
    </>
        
    );
}