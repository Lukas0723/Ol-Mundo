import styles from "./SobreMim.module.css"

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minhaFoto.png"


export default function SobreMim() {
    return (
       <PostModelo 
       fotoCapa={fotoCapa}
       titulo="Sobre mim">

        <h3 className={styles.subtitulo}>
            Olá, eu sou o Lucas
        </h3>

        <img src={fotoSobreMim}
            alt="Foto do Lucas em uma quadra de futsal"
            className={styles.fotoSobreMim}
        />
        <p className={styles.paragrafo}>
            
        Oi, tudo bem? Eu sou aluno da escola AZ Internacional e estou fazendo diversos cursos de programação na Alura e estou feliz de ver que algumas pessoas estão visitando uma página que eu mesmo criei por meio de um desses cursos de programação.
        </p>

        <p className={styles.paragrafo}> 
        Comecei a estudar programação através de um evento gratuito que conheci no Instagram, através dele comecei a me aprofundar e conhecer pessoas que já trabalhavam na área, por conta disso tive ajuda de diversas pessoas e hoje já tenho um domínio nas linguagens de HTML, CSS e JS (JavaScript), já estudei NodeJs e React mas me aprofundei somente no React. 
        </p>

        <p className={styles.paragrafo}>
        Meu objetivo é dominar cada vez mais linguagens de programação e talvez até aprender um pouco sobre a Interligência artificial, pois é algo muito presente no nosso dia a dia e que eu acho que vai ser muito requisitada daqui alguns anos.
        </p>       

       </PostModelo>
    )
}