import Project from "@models/Project";
import { projectsFromDb, updateProjectsDb } from "./projectList";

class ProjectRepository {

  findById(projectId: number): Project | undefined {
    return projectsFromDb().find((project) => project.id === projectId);
  }

  findAll() {
    return projectsFromDb();
  }

  create(project: Project) {
    projectsFromDb().push(project);
  }

  update(project: Project): Project  {
    const updatedList = projectsFromDb().map((projectInList) => {
      if(projectInList.id !== project.id) {
        return projectInList;
      }
      return project;
    });
    updateProjectsDb(updatedList);

    return project;
  }

  delete(project: Project) {
    const updatedList = projectsFromDb().filter((projectInList) => {
      if(projectInList.id !== project.id) {
        return projectInList;
      }
    });
    updateProjectsDb(updatedList);
  } 
 
}

export default new ProjectRepository();
