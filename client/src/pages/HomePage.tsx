import React, { useState, useEffect } from "react";
import { AddProjectForm, ProjectComponent } from "./../components";
import { Project } from "../models";

export default interface ProjectState {
  id?: string;
  name: string;
  description: string;
}

export const HomePage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setProject] = useState<ProjectState>({name: '', description: ''});

  const showProjects = () => {
    fetch("/projects")
      .then(res => res.json())
      .then(projects => {
        setProjects(projects);
      });
  }

  const addProject = (name: string, description: string) => {
    const newProject = { name: name, description: description };
    fetch(`/projects`, { 
      method: "POST",
      headers: {"Content-type" : "application/json" },
      body: JSON.stringify(newProject) 
    }).then(r => r.json()).then((newProject) => {
      // showProjects();
      setProjects([...projects, newProject]);
      setProject({name: "", description: ""});
    })
    .catch(error => console.log(error));
  }

  const deleteProject = (id: string) => {
    fetch(`/projects/${id}`, { method: "DELETE" 
    }).then(() => showProjects())
    .catch(error => console.log(error));

    // const remainingProjects = projects.filter(project => project.id !== id);
    // setProjects(remainingProjects);
  }

  useEffect(() => {
    showProjects();
  }, []);

  const editProject = (name: string, description: string) => {
    const updatedProject = {name: name, description: description};
    fetch(`/projects/${selectedProject.id}`, { 
        method: "PUT",
        headers: { "Content-type" : "application/json" },
        body: JSON.stringify(updatedProject) 
      }).then(() => {
        showProjects();
        setProject({name: "", description: ""});
      })
      .catch(error => console.log(error));
  }

  const updateProject = (id: string) => {
    const project = projects.find(project => project.id === id);
    if(project) {
      setProject({name: project.name, description: project.description, id: project.id});
    }
  }

  const projectComponents = projects.map((project) =>
    <ProjectComponent
      id={project.id}
      key={project.id} 
      name={project.name} 
      description={project.description} 
      deleteProject={deleteProject}
      updateProject={updateProject}
    />
  );

  return (
    <div>   
      <AddProjectForm 
        addProject={addProject} 
        editProject={editProject}
        project={selectedProject} 
      />
      <ul>
        {projectComponents}
      </ul>
    </div>
  );
}
