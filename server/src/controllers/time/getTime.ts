
import { Request, Response } from 'express';
import timeRepository  from '@repository/time.repository';

export const timeList = (req: Request, res: Response) => {
    const projectId = Number(req.params.projectId);
    const times = timeRepository.findAllTimesForProject(projectId);
    res.json(times);
}

export const timeDetail = (req: Request, res: Response) => {
    const projectId = Number(req.params.projectId);
    const timeId = Number(req.params.timeId);

    timeRepository.findById(projectId, timeId);
}