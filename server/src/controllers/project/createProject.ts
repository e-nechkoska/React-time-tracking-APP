
import { Request, Response } from 'express';
import projectRepository from '@repository/project.repository';
import { StatusCodes } from 'http-status-codes';
import Project from '@models/Project';

interface CreateProjectRequest {
  name: string;
  description: string;
}

const validProjectRequest = ({name, description}: CreateProjectRequest): boolean => {
  if(name && description) {
    return true;
  }
  return false;
}

export const createProject = (req: Request, res: Response) => {
  const {name, description}: CreateProjectRequest = req.body;
  if(validProjectRequest(req.body)) {
    const project = new Project(
      name,
      description
    );
  
    projectRepository.create(project);
    res.status(StatusCodes.CREATED).end();
  } else {
    res.status(StatusCodes.BAD_REQUEST).end();
  }
}