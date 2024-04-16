import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minhaFoto.png"

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo! 
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu portfólio pessoal! Eu sou Lucas, aluno do Colégio AZ internacional. Aqui eu compartilho várias coisas, espero que se interessem :)
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden = {true}/>

                <img className={styles.minhaFoto} src={minhaFoto} alt="Foto do Lucas jogando bola"/>
            </div>
        </div>
    )
}