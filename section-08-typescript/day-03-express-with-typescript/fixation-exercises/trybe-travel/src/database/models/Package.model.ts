import { Model, DataTypes, ModelDefined, Optional } from 'sequelize';
import { Package } from '../../types/Package';
import db from './index';

export type PackageInputtableFields = Optional<Package, 'id'>;

type PackageSequelizeModelCreator = ModelDefined<Package, PackageInputtableFields>;

export type PackageSequelizeModel = Model<Package, PackageInputtableFields>;

const PackageModel: PackageSequelizeModelCreator = db.define('Package', {
  destination: DataTypes.STRING,
  category: DataTypes.STRING,
  price: DataTypes.DECIMAL,
}, {
  tableName: 'packages',
  timestamps: false,
  underscored: true,
});

export default PackageModel;