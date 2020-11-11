import React, { useState, useEffect } from "react";
import { AddProjectForm, ProjectComponent } from "./../components";
import { Project } from "../models";
// import { fetchAllProjects, createProject, updateProject, deleteProject } from "../services/ProjectService";

export default interface ProjectState {
  id?: string;
  name: string;
  description: string;
}

export const HomePage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<ProjectState>({name: '', description: ''});

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
    }).then(res => res.json()).then((newProject) => {
      // showProjects();
      setProjects([...projects, newProject]);
      setSelectedProject({name: "", description: ""});
    })
    .catch(error => console.log(error));
  }

  const deleteProject = (id: string) => {
    fetch(`/projects/${id}`, { method: "DELETE" 
    }).then(() => showProjects())
    .catch(error => console.log(error));

    // you can refresh all projects by fetching them again from the server, or filter the projects  
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
        setSelectedProject({name: "", description: ""});
      })
      .catch(error => console.log(error));
  }

  const updateProject = (id: string) => {
    const project = projects.find(project => project.id === id);
    if(project) {
      setSelectedProject({name: project.name, description: project.description, id: project.id});
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
      <table>
        <tr>
          <th>Project name</th>
          <th>Description</th>
          <th>View</th>
          <th>Edit</th>
          <th>Delete</th>
       </tr>
          {projectComponents}
      </table>
    </div>
  );
}
