import PackageModel from '../database/models/Package.model';
import { Package } from '../types/Package';
import { ServiceResponse } from '../types/ServiceResponse';

async function updatePackage(updatedPackage: Package): Promise<ServiceResponse<Package>> {
  const packageToUpdate = await PackageModel.findByPk(updatedPackage.id);

  if (!packageToUpdate) return { status: 'NOT_FOUND', data: { message: 'Pacote não encontrado!' } };

  await PackageModel.update(updatedPackage, { where: { id: updatedPackage.id } });

  const packageUpdate = await packageToUpdate.reload();

  return { status: 'SUCCESSFUL', data: packageUpdate.dataValues };
}

async function deletePackage(id: number): Promise<ServiceResponse<{ message: string }>> {
  const packageToDelete = await PackageModel.findByPk(id);

  if (!packageToDelete) return { status: 'NOT_FOUND', data: { message: 'Pacote não encontrado!' } };

  await PackageModel.destroy({ where: { id } });

  return { status: 'SUCCESSFUL', data: { message: 'Pacote deletado com sucesso!' } };
}

export default {
  updatePackage,
  deletePackage,
};