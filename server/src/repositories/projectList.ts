
import Project from "@models/Project";
import Time from "@models/Time";

const time1 = new Time('time1', 120);
const time2 = new Time('time2', 100);
const time3 = new Time('time3', 200);
const time4 = new Time('time4', 300);
const time5 = new Time('time5', 400);

const timeList1 = [time1, time2];
const timeList2 = [time3];
const timeList3 = [time4, time5];

const project1 = new Project('Project-1', 'Desc1', timeList1);
const project2 = new Project('Project-2', 'Desc2', timeList2);
const project3 = new Project('Project-3', 'Desc3', timeList3);

let PROJECTS = [project1, project2, project3];

export const projectsFromDb = () => PROJECTS;

export const updateProjectsDb = (newProjects: Project[]) => {
  PROJECTS = newProjects;
}

export const updateProjectTimes = (projectId: string, newTimes: any) => {
  const project = PROJECTS.find((project) => {
      if(project.id === projectId) {
        return true;
      } else {
        return false;
      }
  });

  if(project) {
    project.times = newTimes;
  }
}