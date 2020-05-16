import React from 'react';
import Menu from './Menu';
import imgFundo from '../img/fundo.jpg';

export default function Home() {

    return(
    <>
        <Menu/>
        <img src={imgFundo} width="100%"/>
    </>
        
    );
}