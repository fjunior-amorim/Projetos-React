import Message from '../../layout/message/Message';
import Styles from './projets.module.css';
import Loading from '../../layout/loading/Loading';

import LinkBotton from '../../layout/LinkBotton/LinkBotton';
import ProjectCard from '../../project/projectCard/ProjectCard';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [removeLoading, setRemoveLoaging] = useState(false);
    const [projectMessage, setProjectMessage] = useState('');
    
    const location = useLocation();
    let message = '';
    if(location.state){
        message = location.state
    }
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
                    method: 'Get',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then((resp) => resp.json())
                .then((data) => {
                    setProjects(data)
                    setRemoveLoaging(true)
                })
                .catch((err) => console.log(err))
        }, 300)
        
    }, [])

    function removerProject(id) {
        fetch(`http://localhost:5000/Projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then(() => {
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto excluido com sucesso!')
        })
        .catch((err) => console.log(err))
    }
    
    return(
        <div className={Styles.projeto}>

            <div className={Styles.project_title}>
                <h1>Meus Projetos</h1>
                <LinkBotton to='/NewProject' text='Criar Projeto'/>
            </div>

            {message && <Message msg={message} type="success"/>}

            {projectMessage.length > 0 && <Message msg={projectMessage} type="success"/>}

            <div className={Styles.card_conteiner}>
                
                {projects.length > 0 &&
                    projects.map((project) =>(
                        <ProjectCard 
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project.category.name}
                        key={project.id}
                        handleRemove={removerProject}
                        />
                    ))
                }

                {!removeLoading && <Loading />}

                {removeLoading && projects.length === 0 &&(
                    <p>não há projetos cadastrados!</p>
                )}

            </div>
        </div>
    )
}

export default Projects;