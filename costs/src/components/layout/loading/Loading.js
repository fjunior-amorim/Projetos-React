import loading from '..//..//..//img/circle.svg';
import styles from './loading.module.css';

function Loading() {
    return(
        <div className={styles.loader_conteiner}>
            <img className={styles.loader} src={loading} alt='Loading'/>
        </div>
    )
}

export default Loading;