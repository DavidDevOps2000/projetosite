import React from 'react';
import Imagem from './Imagem';
import Texto from './Texto';
import imgplan1 from '../img/plan1.jpg';
import imgplan2 from '../img/plan2.jpg';
import imgplan3 from '../img/plan3.jpg';


export default function Planetas(){
    return(
    <>
            <div className="textHome">
           <h1> O que são planetas</h1>
            
        <Texto seuTexto={"Planetas são corpos celestes sem luz e calor próprios, sólidos, arredondados e com gravidade própria, os quais giram em torno de uma estrela maior (órbita livre), que no caso do planeta Terra é o Sol Assim, no espaço em que o frio chega a 270 °C abaixo de zero, giram inúmeras esferas iluminadas por seus respectivos sóis A cosmologia calcula que os planetas do Sistema Solar tenham se formado há aproximadamente 4,6 bilhões de anos. Entre outras teorias, os cientistas acham que tudo começou com uma explosão de gases e poeira cósmica, que teria formado uma nuvem e dessa nuvem teria surgido pequenos corpos sólidos, dos quais deram origem à formação de galáxias, que são aglomerados gigantescos de estrelas, planetas, satélites, asteroides etc."} />

            <Imagem suaImage={imgplan2}/>
            
            <Texto seuTexto={"Como todos os demais corpos, os planetas e as estrelas atraem outros corpos para junto de si. O Sol, ao seguir sua órbita no espaço, atrai planetas que giram ao seu redor, enquanto os planetas atraem os seus respectivos satélites. A velocidade com que os satélites giram em torno de seu planeta e os planetas ao redor do Sol, lhe confere uma força centrífuga, que os impulsiona para fora de sua órbita, essa força neutraliza a da gravidade que os atrai em direção ao Sol Como duas forças contrárias se anulam, os planetas e os satélites se mantêm numa órbita constante."}/>
       
        <Imagem suaImage={imgplan3}/>
            <Texto seuTexto={" Galáxias espirais em barra – apresentam braços de estrelas e núcleo central menos desenvolvido se comparado às galáxias espirais.\
                \
                Galáxias elípticas – são formadas por um grande conjunto de estrelas e pouca poeira cósmica.\
                \
                Galáxias irregulares – recebem esse nome por não apresentarem forma definida.\
                \
                Um exemplo de galáxia espiral é a Via Láctea, que abriga o Sistema Solar. Essa galáxia, inserida no Grupo Local, é formada por aproximadamente 200 bilhões de estrelas, cerca de 2 trilhões de massas solares e diâmetro de 100 mil anos-luz, ou seja, um raio de luz com velocidade de 300 mil Km/s demoraria 100 mil anos para atravessar essa galáxia.\
                \
                Por Wagner de Cerqueira e Francisco\
                Graduado em Geografia\ Equipe Brasil Escola" }/>

            <Imagem imagens = {imgplan1} />
            </div>

        </>
    );
}