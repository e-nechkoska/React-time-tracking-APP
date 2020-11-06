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
      key={project.id} 
      name={project.name} 
      description={project.description} 
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
