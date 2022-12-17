import { Link } from 'react-router-dom';
import styles from'./linkbotton.module.css';

function LinkBotton({ to, text }) {
    return (
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}

export default LinkBotton;