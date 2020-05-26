import React from 'react';
import imgest1 from '../img/est1.jpg';
import imgest2 from '../img/est2.jpg';
import imgest3 from '../img/est3.jpg';
import Imagem from './Imagem';


export default function Estrelas(){
    return(
        <>
        <div className="textHome" style={{width:"50%", marginRight:"20%"}}>
               
                <h3>Como as estrelas são criadas?</h3>
                <Imagem suaImage = {imgest1}/>
                <h6>
                
                    As estrelas formam-se pela condensação de gases que se aglutinam pela atração gravitacional. As grandes nebulosas, por exemplo, são “berçários” de estrelas, uma vez que, em seu interior, grandes nuvens moleculares dão origem a novas estrelas. Quando os gases responsáveis pela formação estelar aproximam-se, a velocidade deles aumenta, impulsionada pela gravidade local, bem como sua densidade e temperatura.

                    Durante um período, que pode levar até 10 milhões de anos, essas protoestrelas (estrelas em estágio inicial de formação) são compactadas por suas próprias gravidades até que a pressão e temperatura em seu núcleo sejam suficientes para que os átomos de hidrogênio fundam-se, produzindo núcleos de hélio. As estrelas que extraem a sua energia da fusão dos átomos de hidrogênio são chamadas de estrelas de sequência principal, esse tipo de estrela corresponde a cerca de 90% de todas as estrelas do Universo.

                    A partir do momento em que as estrelas tornam-se capazes de realizar fusões termonucleares, o seu combustível é consumido, até que a estrela evolua para o seu estágio final de vida. As possibilidades são muitas: de acordo com a massa da estrela e o seu raio, é possível estimar como será o seu futuro. Essas grandezas estelares, como a massa e o raio das estrelas, são comumente medidas em função da massa solar (M☉) e raio solar (R☉).
                </h6>
                <h3>Do que as estrelas são feitas?</h3>
                <Imagem suaImage ={imgest2} />
                <h6>A maior parte das estrelas, cujas massas são de 0,5M☉ (metade da massa do Sol) até 2,5M☉, são compostas de hélio e hidrogênio, os elementos mais abundantes do Universo. Isso acontece, porque essas estrelas não têm gravidade nem temperaturas suficientemente altas para fundir elementos mais pesados.

                    Quando as estrelas são muito massivas: entre 5M☉ e 10M☉ - como as supergigantes, no seu interior são formados elementos mais pesados que o hélio. O estágio final de vida dessas estrelas é uma supernova, uma grande explosão que lança toda a sua matéria e energia pelo espaço, dando origem a outras estrelas e planetas.</h6>
                <h3>Vida e morte das estrelas</h3>
                <h6>

                O tempo de “vida” das estrelas depende da sua massa: a rapidez com a qual elas consomem o seu combustível é o que diz quanto tempo a estrela mantém o seu brilho, o Sol, por exemplo, consome menos de 0,01% de sua massa, anualmente, aumentando sua temperatura e luminosidade. Estima-se que desde o momento em que o Sol tornou-se uma estrela de sequência principal, 4,6 bilhões de anos atrás, o seu brilho tenha aumentado mais de 40%.

                As estrelas de sequência principal, chamadas de estrelas anãs, são a absoluta maioria das estrelas no Universo, o nosso Sol, por exemplo, trata-se de uma anã amarela, uma estrela de sequência principal de “baixa temperatura” quando comparada às estrelas mais quentes, como as anãs azuis. Confira alguns dos estágios evolutivos de estrelas de acordo com a sua massa:

                Estrelas muito pouco massivas: Essas estrelas, cujas massas são de até metade da massa solar, eventualmente, resfriam-se após consumir o hidrogênio em seu interior, tornando-se teoricamente anãs brancas formadas exclusivamente por hélio, entretanto, o tempo de vida calculado para esse tipo de estrelas é maior que o do próprio Universo, por isso as estrelas existentes ainda se tornarão anãs brancas.

                Estrelas pouco massivas: Nos seus estágios finais de vida, estrelas de até 2,5M☉ passam a formar átomos de carbono e oxigênio em seu núcleo. Com a diminuição de suas massas e a consequente diminuição de seu campo gravitacional, essas estrelas tornam-se gigantes. Durante sua expansão, essas estrelas expelem suas camadas exteriores, formando nebulosas planetárias.

                Estrelas de massa intermediária: Essas estrelas têm uma evolução parecida com as estrelas pouco massivas, depois de sua expansão, deixam para trás apenas o seu núcleo, dando origem a estrelas anãs.

                Estrelas massivas: Após ter fundido todo o seu hidrogênio, essas estrelas expandem-se, tornando estrelas supergigantes, nesse período, passam a fundir elementos pesados até que sua gravidade não consiga suportar a força das reações nucleares, quando isso acontece, essas estrelas explodem, lançando o seu conteúdo pelo espaço a velocidades altíssimas
                </h6>
                <Imagem suaImage = {imgest3} />

        </div>

        </>
    );
}