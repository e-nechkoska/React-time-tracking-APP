
import projectRepository from '@repository/project.repository';
import Time from '@models/Time';
import { updateProjectTimes } from '@repository/projectList';

const findAllTimesForProject = (projectId: number): Time[] | undefined => {
    const project = projectRepository.findById(projectId);
    if(project) {
        return project.times;
    }
    return undefined;
}

const create = (projectId: number, newTime: Time) => {
    const project = projectRepository.findById(projectId);
    if(project) {
        project.times.push(newTime);
    }
}

const findById = (projectId: number, timeId: number): Time | undefined => {
    const project = projectRepository.findById(projectId);
    if(project) {
        return project.times.find(time => timeId === time.id);
    } 
    return undefined;
}

const deleteTime = (projectId: number, timeId: number) => {
    let times = findAllTimesForProject(projectId);
    if(times) {
        const filteredTimes = times.filter((time) => {
            if(time.id !== timeId) {
                return true;
            }
            return false;
        });
        updateProjectTimes(projectId, filteredTimes);
        return true;
    }
    return false;
}

export default {
    findAllTimesForProject,
    create,
    findById,
    deleteTime
};