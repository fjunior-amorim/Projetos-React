import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from'./Projeto.module.css';
import Loading from '../../layout/loading/Loading';
import ProjectForm from '../ProjectForm';
import Message from '..//..//layout/message/Message';

function Project() {
    const { id } = useParams();
    const [projeto, setProjeto] = useState([]);
    const [message, setMessage] = useState();
    const [type, setType] = useState();
    const [showProjectForm, setShowProjectForm] = useState(false);

    useEffect(() => {
       setTimeout(() => {
        fetch(`http://localhost:5000/Projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(resp => resp.json())
        .then((data) => {
            setProjeto(data)
        })
        .catch((err) => console.log(err))
       }, 300)
    }, [id])

    function editPost(project) {
        setMessage('')
          // validation budget
        if(project.budget < project.cost) {
          // message
          setMessage('O orçamento não pode ser maior que o custo do projeto')
          setType('error')
          return false
        }
        
        fetch(`http://localhost:5000/Projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then(() => {
            setProjeto(project)
            setShowProjectForm(false)
            setMessage('Projeto atualizado com sucesso!')
            setType('success')
        })
        .catch((err) => console.log(err))
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm);
    }

    return(
        <div className={styles.conteine_projeto}>
            {message && <Message type={type} msg={message}/>}

            {projeto.name ? (
                <div className={styles.column}>
                    <h1>Projeto: {projeto.name}</h1>

                    <button className={styles.btn} onClick={toggleProjectForm}>
                        {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
                    </button>

                    {!showProjectForm ? (
                        <div className={styles.project_info}>
                            <div>
                                <p>
                                    <span>Categoria: </span> {projeto.category.name}
                                </p>
                                
                                <p>
                                    <span>Total de Orçamento: </span> R$: {projeto.budget}
                                </p>

                                <div>
                                    <span>Descrição: </span>
                                    <p className={styles.descricao}>{projeto.descrição}</p>
                                </div>
        
                            </div>
                        </div>
                        ) : (
                        <div>
                            <div className={styles.project_info_two}>
                                <ProjectForm 
                                handleSubmit={editPost}
                                btnText="Concluir edição"
                                projectData={projeto}
                                />
                            </div>
                        </div>
                    )}      
                </div>
            ) : (<Loading />)}
        </div>
    )
}

export default Project;