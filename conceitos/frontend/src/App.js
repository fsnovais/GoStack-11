import React, {useState, useEffect} from 'react';
import api from './services/api';

import Header from './components/Header';
import './App.css'
import background from './assets/background.jpg'

function App() {
  const [projects, setProjects] = useState([])
  
  useEffect(() => 
  {api.get('projects').then(response => 
    setProjects(response.data)
    )},[])

async function handleAddProject() {
    // setProjects([...projects, `project ${Date.now()}`])
  const response = await api.post('projects', {
      title: `Project ${projects.length}`,
      owner: "Felipe Novais"
    });
    const project = response.data;
    setProjects([...projects, project]);
  }
  return (
    <>
    <Header title="Projects"/>
      <img width='200' src={background}/>
      <ul>
      {projects.map( project => <li key={project.id}>{project.title}</li>)}
      </ul>
      <button className="AddProject" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  )
}

export default App;