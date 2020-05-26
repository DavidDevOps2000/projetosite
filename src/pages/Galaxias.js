import React from 'react';
import imggal1 from '../img/gal1.jpg';
import imggal2 from '../img/gal2.jpg';
import imggal3 from '../img/gal3.jpg';
import Texto from './Texto';
import Imagem from './Imagem';


export default function Galaxias(){
    return(
       <>   <div className="textHome">
           <h1> Galaxias</h1>
            
        <Texto seuTexto={"O estudo das galáxias é muito antigo, sendo que muitas teorias se baseavam em mitologias Contudo, o desenvolvimento tecnológico possibilitou maior precisão na análise e caracterização do tema em questão,  pois a dificuldade de identificação de uma galáxia é muito grande – somente três galáxias são visíveis da Terra a olho nu (Pequena e Grande Nuvem de Magalhães e Andrômeda).\
                O projeto Sloan Digital Sky Survery, por exemplo, proporcionou a catalogação de aproximadamente 1 milhão de galáxias, no entanto, estima-se que existam cerca de 100 bilhões delas no universo. Outra importante contribuição do aparato tecnológico foi a classificação das galáxias de acordo com o sua morfologia. Sendo assim, foram determinados quatro tipos: Galáxias espirais – possuem extensos braços de estrelas \
                e nuvens de poeira cósmica."} />

            <Imagem suaImage={imggal2}/>
            
            <Texto seuTexto={"\
                O estudo das galáxias é muito antigo, sendo que muitas teorias se baseavam em mitologias. Contudo, o desenvolvimento tecnológico possibilitou maior precisão na análise e caracterização do tema em questão, pois a dificuldade de identificação de uma galáxia é muito grande – somente três galáxias são visíveis da Terra a olho nu (Pequena e Grande Nuvem de Magalhães e Andrômeda).\
                \
                O projeto Sloan Digital Sky Survery, por exemplo, proporcionou a catalogação de aproximadamente 1 milhão de galáxias, no entanto, estima-se que existam cerca de 100 bilhões delas no universo. Outra importante contribuição do aparato tecnológico foi a classificação das galáxias de acordo com o sua morfologia. Sendo assim, foram determinados quatro tipos:\
                Galáxias espirais – possuem extensos braços de estrelas e nuvens de poeira cósmica."}/>
       
        <Imagem suaImage={imggal3}/>
            <Texto seuTexto={"\
                Galáxias espirais em barra – apresentam braços de estrelas e núcleo central menos desenvolvido se comparado às galáxias espirais.\
                \
                Galáxias elípticas – são formadas por um grande conjunto de estrelas e pouca poeira cósmica.\
                \
                Galáxias irregulares – recebem esse nome por não apresentarem forma definida.\
                \
                Um exemplo de galáxia espiral é a Via Láctea, que abriga o Sistema Solar. Essa galáxia, inserida no Grupo Local, é formada por aproximadamente 200 bilhões de estrelas, cerca de 2 trilhões de massas solares e diâmetro de 100 mil anos-luz, ou seja, um raio de luz com velocidade de 300 mil Km/s demoraria 100 mil anos para atravessar essa galáxia.\
                \
                Por Wagner de Cerqueira e Francisco\
                Graduado em Geografia\ Equipe Brasil Escola" }/>

            <Imagem imagens = {imggal1} />
            </div>
        </>
    );
}