import { Request, Response } from 'express';
import packagesService from '../services/packages.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function updatePackage(req: Request, res: Response) {
  const id = Number(req.params.id);
  const { destination, category, price } = req.body;

  const serviceResponse = await packagesService.updatePackage({ id, destination, category, price });

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  return res.status(200).json(serviceResponse.data);
}

async function deletePackage(req: Request, res: Response) {
  const id = Number(req.params.id);

  const serviceResponse = await packagesService.deletePackage(id);

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  return res.status(204).end();
}

export default {
  updatePackage,
  deletePackage,
};