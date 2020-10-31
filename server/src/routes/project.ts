
import { Router } from 'express';

import projectController from '../controllers/project';
import timeController from '../controllers/time';

const router = Router();

router.get('/projects', projectController.projectList);
router.get('/projects/:projectId', projectController.projectDetail);
router.post('/projects', projectController.createProject);
router.put('/projects/:projectId', projectController.updateProject);
router.delete('/projects/:projectId', projectController.deleteProject);

router.get('/projects/:projectId/times', timeController.timeList);
router.post('/projects/:projectId/times', timeController.createTime);
router.delete('/projects/:projectId/times/:timeId', timeController.deleteTime);

export default router;
