import React, { useState, useEffect } from "react";
import { AddProjectForm, ProjectComponent } from "./../components";
import { Project } from "../models";
import { nanoid } from "nanoid";

export function HomePage() {
  const [projects, setProjects] = useState<Project[]>([]);

  function addProject(name: string, description: string) {
    const newProject = { id: nanoid(), name: name, description: description };
    setProjects([...projects, newProject]);
  }

  function deleteProject(id: string) {
    fetch(`/projects/${id}`, { method:"DELETE" })
    .then(res => res.json())
    .catch(error => console.log(error));
    const remainingProjects = projects.filter(project => project.id !== id);
    setProjects(remainingProjects);
  }

  useEffect(() => {
    fetch("/projects")
      .then(res => res.json())
      .then(projects => {
        setProjects(projects);
      })
      .catch(error => console.log(error));
  }, []);

  const projectComponents = projects.map((project) =>
    <ProjectComponent
      id={project.id}
      key={project.id} 
      name={project.name} 
      description={project.description} 
      deleteProject={deleteProject}
    />
  );

  return (
    <div>   
      <AddProjectForm addProject={addProject} />
      <ul>
        {projectComponents}
      </ul>
    </div>
  );
}
