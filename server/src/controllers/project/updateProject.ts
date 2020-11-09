
import { Request, Response } from 'express';
import projectRepository from '@repository/project.repository';
import { StatusCodes } from 'http-status-codes';

export const updateProject = (req: Request, res: Response) => {
  const projectId = req.params.projectId;
  const project = projectRepository.findById(projectId);
  if(project) {
    project.name = req.body.name;
    project.description = req.body.description;
    projectRepository.update(project);
    res.status(StatusCodes.NO_CONTENT).end();
  } else {
    res.status(StatusCodes.BAD_REQUEST).end();
  }

} 