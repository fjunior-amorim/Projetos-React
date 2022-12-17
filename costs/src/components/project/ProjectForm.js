import {useEffect, useState} from 'react';
import InputComponent from '../form/input/InputComponent';
import SelectComponent from '../form/select/SelectComponent';
import SubmitButton from '../form/submitButton/SubmitButton';


function ProjectForm({ handleSubmit, btnText, projectData}) {
    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'Get',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    },[]);

    const submit = (e) => {
        e.preventDefault()
       handleSubmit(project)
    }

    function handleChange(e) {
        setProject({...project, [e.target.name]:e.target.value })
    }

    function handleCategory(e) {
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
     })  
    }

    return(
        <form onSubmit={submit}>
            <InputComponent 
            type="text"
            text="Nome do Projeto"
            name="name"
            placeholder="insira o nome do projeto"
            handleOnChange={handleChange}
            value={project.name ? project.name : ''}
            />
            <InputComponent 
            type="number"
            text="Orçamento do projeto"
            name="budget"
            placeholder="insira o orçamento total"
            handleOnChange={handleChange}
            value={project.budget ? project.budget : ''}
            />
            <InputComponent 
            type="text"
            text="Descrição"
            name="descrição"
            placeholder="insira uma descrição"
            handleOnChange={handleChange}
            value={project.descrição ? project.descrição : ''}
            />
            <SelectComponent 
            name="category_id" 
            text="Selecione a Categoria"
            options={categories}
            handleOnChange={handleCategory}
            value={project.category ? project.category.id : ''}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm;