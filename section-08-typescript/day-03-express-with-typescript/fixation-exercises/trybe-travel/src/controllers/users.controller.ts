import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import usersService from '../services/users.service';

async function list(_req: Request, res: Response) {
  const serviceResponse = await usersService.list();

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  res.status(200).json(serviceResponse.data);
}

export default {
  list,
};