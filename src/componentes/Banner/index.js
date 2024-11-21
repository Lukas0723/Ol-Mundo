import styles from "./Banner.module.css";
import minhaFoto from "assets/logo.png"

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá Pessoal! 
                </h1>
                <p className={styles.paragrafo}>
                    Bem-vindo à Casa do Norte Empório Central, um cantinho nordestino localizado aqui em Osasco! Estamos localizados na Rua Antônio Agu, número 993, nossa missão é trazer um pouco da rica cultura nordestina para o coração de São Paulo. Nossa loja oferece uma grande variedade de produtos típicos que celebram a tradição, os sabores e as cores da região, criando uma conexão entre o sertão e o sudeste. Venha nos visitar e descubra uma verdadeira experiência nordestina, onde cada detalhe foi pensado para te levar ao melhor da nossa cultura.                
                </p>
                <p className={styles.paragrafo}>
                    Aqui no nosso site, você encontrará uma introdução ao que a Casa do Norte representa, explorando nossa variedade de produtos como ervas, chás e temperos, conhecidos por seus benefícios à saúde e por realçar o sabor dos pratos. Além disso, temos uma seleção de suplementos para academia e outros produtos naturais para performance física. Confira também nosso cardápio completo com preços e descrições dos produtos na aba “Produtos e Preços”. 
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.minhaFoto} src={minhaFoto} alt="Foto da logo da Casa do Norte Empório Central"/>
            </div>
        </div>
    )
}