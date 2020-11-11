//use these services in HomePage.tsx
import { Project } from "../models"

export const fetchAllProjects = (): Promise<Project[]> => {
  return Promise.resolve(fetch("/projects")
    .then(res => res.json()));
}

export const fetchProjectById = (projectId: string): Promise<Project> => { 
  return Promise.resolve(fetch(`/projects/${projectId}`).then(res => res.json()));
}

export const createProject = (project: Project): Promise<Project> => {
  return Promise.resolve(fetch(`/projects`, { 
    method: "POST",
    headers: {"Content-type" : "application/json" },
    body: JSON.stringify(project) 
  }).then(res => res.json()));

}

export const updateProject = (projectId: string, project: Project) => {
  return Promise.resolve(fetch(`/projects/${projectId}`, { 
    method: "PUT",
    headers: { "Content-type" : "application/json" },
    body: JSON.stringify(project) 
  }));
}

export const deleteProject = (projectId: string) => {
  return Promise.resolve(fetch(`/projects/${projectId}`, { method: "DELETE" }));
}
