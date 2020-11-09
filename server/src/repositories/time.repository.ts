
import projectRepository from '@repository/project.repository';
import Time from '@models/Time';
import { updateProjectTimes } from '@repository/projectList';

const findAllTimesForProject = (projectId: string): Time[] | undefined => {
    const project = projectRepository.findById(projectId);
    if(project) {
        return project.times;
    }
    return undefined;
}

const create = (projectId: string, newTime: Time) => {
    const project = projectRepository.findById(projectId);
    if(project) {
        project.times.push(newTime);
    }
}

const findById = (projectId: string, timeId: string): Time | undefined => {
    const project = projectRepository.findById(projectId);
    if(project) {
        return project.times.find(time => timeId === time.id);
    } 
    return undefined;
}

const deleteTime = (projectId: string, timeId: string) => {
    const times = findAllTimesForProject(projectId);
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