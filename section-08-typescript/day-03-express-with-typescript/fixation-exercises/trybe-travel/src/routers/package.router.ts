import { Router } from 'express';
import packagesController from '../controllers/package.controller';

const packagesRouter = Router();

packagesRouter.patch('/packages/:id', packagesController.updatePackage);
packagesRouter.delete('/packages/:id', packagesController.deletePackage);

export default packagesRouter;