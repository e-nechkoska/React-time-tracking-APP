
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import projectRepository from '@repository/project.repository';

export const projectList = (req: Request, res: Response) => {
  res.json(projectRepository.findAll());
};

export const projectDetail = (req: Request, res: Response) => {
  const projectId = Number(req.params.projectId);
  const project = projectRepository.findById(projectId);

  if(project) {
    res.json(project);
  } else {
    res.status(StatusCodes.NOT_FOUND).end();
  }
};
