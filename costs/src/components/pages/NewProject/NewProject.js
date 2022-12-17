import { useNavigate } from "react-router-dom";
import ProjectForm from '../../project/ProjectForm';
import styles from'./newproject.module.css';

function NewProject() {

    let navigate = useNavigate();
    function createPost(project) {

        fetch('http://localhost:5000/Projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then(() => {
            //redirect
            navigate('/Projects', { state :"Projeto criado com sucesso!"}) 
        })
        .catch((err) => console.log(err))
    }
    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject;