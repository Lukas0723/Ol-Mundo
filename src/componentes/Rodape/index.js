import styles from './rodape.module.css';
// import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg'

export default function Rodape() {
    return (
        <footer className={styles.rodape}> 
            Desenvolvido em parceria com a Casa do Norte Empório Central
        </footer>
    )
}