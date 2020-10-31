
import { Request, Response } from 'express';
import timeRepository from '@repository/time.repository';
import { StatusCodes } from 'http-status-codes';

export const deleteTime = (req: Request, res: Response) => {
    const projectId = Number(req.params.projectId);
    const timeId = Number(req.params.timeId);

    if(timeRepository.deleteTime(projectId, timeId)) {
        res.status(StatusCodes.NO_CONTENT).end();
    } else {
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}