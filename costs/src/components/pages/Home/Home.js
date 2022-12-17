import styles from './home.module.css';
import savings from '..//..//..//img/savings.svg';
import LinkBotton from '../../layout/LinkBotton/LinkBotton';
function Home() {
    return(
        <section className={styles.home}> 
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkBotton to='/NewProject' text='Criar Projeto'/>
            <img  src={savings} alt='Costs'/>
        </section>
    )
}

export default Home;