import Project from "@models/Project";
import Time from "@models/Time";

const time1 = new Time(1, 'time1', 120);
const time2 = new Time(2, 'time2', 100);
const time3 = new Time(3, 'time3', 200);
const time4 = new Time(4, 'time4', 300);
const time5 = new Time(5, 'time5', 400);

const timeList1 = [time1, time2];
const timeList2 = [time3];
const timeList3 = [time4, time5];

const project1 = new Project('pr1', 'desc1', timeList1);
const project2 = new Project('pr2', 'desc2', timeList2);
const project3 = new Project('pr3', 'desc3', timeList3);

let PROJECTS = [project1, project2, project3];

export const projectsFromDb = () => PROJECTS;
export const updateProjectsDb = (newProjects: Project[]) => {
  PROJECTS = newProjects;
}
