
import { Request, Response } from 'express';
import timeRepository  from '@repository/time.repository';
import Time from '@models/Time';
import { StatusCodes } from 'http-status-codes';

interface CreateTimeRequest {
    description: string;
    amount: number;
}

const validTimeRequest = ({description, amount}: CreateTimeRequest): boolean => {
    if(description && amount) {
        return true;
    } 
    return false;
}

export const createTime = (req: Request, res: Response) => {
    const projectId = req.params.projectId;
    const {description, amount} = req.body;

    if(validTimeRequest(req.body)) {
        const newTime = new Time(
            description,
            amount
        )
        timeRepository.create(projectId, newTime);
        res.json(newTime);
    } else {
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}