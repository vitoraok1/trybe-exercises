import { ServiceResponse } from '../types/ServiceResponse';
import UserModel, { UserSequelizeModel } from '../database/models/User.model';

async function list(): Promise<ServiceResponse<UserSequelizeModel[]>> {
  const users = await UserModel.findAll();
  return { status: 'SUCCESSFUL', data: users };
}

export default {
  list,
};