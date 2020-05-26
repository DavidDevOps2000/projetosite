import React from 'react';
import Menu from './Menu';
import Texto from './Texto';
import Imagem from './Imagem';
import imgNebu1 from '../img/nebu1.jpg';
import imgNebu2 from '../img/nebu2.jpg';
import imgNebu3 from '../img/nebu3.jpg';

export default function Nebulosas() {

    return(
         <>  
          <div className="textHome">
           <h1> Nebulosas</h1>
            
        <Texto seuTexto={"O que são nebulosas? O que é? O que são nebulosas? Trata-se de nuvens cósmicas formadas por poeira espacial, plasma e hidrogênio. Elas podem ser de emissão, reflexão, escuras ou planetárias.9 Nebulosas são nuvens formadas por poeira cósmica, hidrogênio e gases ionizados a partir de restos de estrelas que se desagregaram. Ao serem observadas, as nebulosas apresentam formatos irregulares semelhantes aos das nuvens, o que foi determinante para a escolha do nome desses corpos celestes, pois a palavra nebulosa provém de um termo em latim que significa nuvem. A poeira cósmica que compõe esses corpos celestes pode aglutinar-se pela ação gravitacional. Assim, a união dos materiais que formam a nebulosa pode dar origem à formação de uma estrela. Por esse motivo, as nebulosas são chamadas de berços de estrelas.O primeiro registro da observação de uma nuvem interestelar foi feito por Cláudio Ptolomeu por volta do ano de 150 d.C. Ptolomeu registrou em dois livros de sua coleção Almagesto a presença de cinco estrelas que apresentavam uma forma indefinida, como se fossem nuvens"} />

            <Imagem suaImage={imgNebu2}/>
            
            <Texto seuTexto={"Nebulosas de emissão são nuvens gasosas de altíssima temperatura iluminadas por luz ultravioleta proveniente de uma estrela próxima. Quando os átomos que compõem a poeira cósmica decaem para estados de energia menos excitados, ocorre a liberação de luz visível. Geralmente, esse tipo de nebulosa apresenta cor vermelha, isso por causa do hidrogênio, material em maior abundância no universo."}/>
       
        <Imagem suaImage={imgNebu3}/>
        
            <Texto seuTexto={"A imagem acima é da Nebulosa do Anel, também conhecida como Messier 57. Essa é uma nebulosa de emissão que fica a 2.300 anos-luz da Terra. Nebulosas de reflexão Nebulosas que apenas refletem a luz de uma estrela próxima são classificadas como refletoras. Como a luz de frequências próximas ao azul é mais facilmente espalhada, essas nebulosas geralmente se apresentam em tons azuis."} />
            <Imagem imagens = {imgNebu1} />
        </div>
        </>
    );
}