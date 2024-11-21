import styles from "./SobreNos.module.css"

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/logo.png";
import fotoSobreNos from "assets/capa.png"


export default function SobreMim() {
    return (
       <PostModelo 
       fotoCapa={fotoCapa}
       titulo="Sobre Nós">

        <h3 className={styles.subtitulo}>
            Olá, nós somos a Casa do Norte Empório Central
        </h3>

        <img src={fotoSobreNos}
            alt="Foto do grafite da Casa do Norte Empório Central"
            className={styles.fotoSobreMim}
        />
        <p className={styles.paragrafo}>
            Nossa loja foi criada com o intuito de compartilhar a riqueza da cultura nordestina com outras regiões do Brasil, levando consigo a essência de um povo caloroso, resiliente e cheio de histórias. Ao atravessar as portas da Casa do Norte Empório Central, você se conecta com tradições que remontam às raízes do sertão, onde cada tempero, cada erva, e cada chá conta traz um pouco da tradição de uma das regiões mais belas do Brasil que, muitas vezes, é pouco explorado esses recursos são pouqíssimo explorados em outras regiões.             
        </p>

        <p className={styles.paragrafo}> 
            Queremos que nossos clientes sintam, através dos sabores e aromas que oferecemos, a autenticidade e os benefícios da culinária nordestina, que é marcada pela simplicidade, mas também pela riqueza de ingredientes e benefícios vindo de produtos naturais para promover o melhor dos nossos clientes. Ao trazer esses produtos naturais para o seu dia a dia, você não só valoriza a gastronomia do Nordeste, mas também vivencia um pouco da cultura dessa região tão vibrante.

        </p>

        <p className={styles.paragrafo}>
            A Casa do Norte Empório Central busca proporcionar essa experiência de maneira única, oferecendo uma imersão nos costumes e na culinária que transcendem as fronteiras geográficas. Nosso compromisso é levar até você o melhor do sertão, com produtos que carregam em si a alma nordestina, aproximando o Nordeste do resto do Brasil e criando uma ponte de sabores e tradições.
        </p>

        <p  className={styles.paragrafo}>
            Além de nossos produtos naturais, na Casa do Norte Empório Central você também encontra uma linha completa de suplementos para academia, com marcas de renome que garantem qualidade e resultados. Nosso principal patrocinador, a Black Skull, é referência no mercado de suplementos, e oferecemos seus produtos com orgulho. Além disso, contamos com outras grandes marcas, como Max Titanium e Integral Médica, conhecidas por sua excelência em nutrição esportiva.
        </p>    

        <p className={styles.paragrafo}> 
            Além dos suplementos, oferecemos uma seleção de produtos naturais que podem complementar sua rotina de treinos, promovendo bem-estar e desempenho físico. Quer você seja um atleta em busca de performance ou alguém que procura melhorar a qualidade de vida, temos opções para todos os perfis, sempre priorizando a saúde e os resultados que você deseja alcançar.
        </p> 


        <p className={styles.paragrafoFinal}>
            VENHA NOS VISITAR AGORA MESMO!!!
        </p>

        <p className={styles.maps}>
            É só clicar {''}<a href="https://www.google.com/maps/dir/-22.9441536,-46.563328/R.+Ant%C3%B4nio+Ag%C3%BA,+993+-+Centro,+Osasco+-+SP,+06013-000/@-23.2388215,-47.0486724,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94ceff0e97bb8b59:0x902b57f57878eac6!2m2!1d-46.7803493!2d-23.5358505?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank">AQUI</a>{''} que você será redirecionado para o nosso endereço
        </p>
       </PostModelo>
    )
}