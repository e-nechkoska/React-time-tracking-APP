
import { Request, Response } from 'express';
import projectRepository from '@repository/project.repository';
import { StatusCodes } from 'http-status-codes';

export const deleteProject = (req: Request, res: Response) => {
  const projectId = Number(req.params.projectId);
  const project = projectRepository.findById(projectId);

  if(project) {
    projectRepository.delete(project);
    res.status(StatusCodes.NO_CONTENT).end();
  } else {
    res.status(StatusCodes.NOT_FOUND).end();
  }
}