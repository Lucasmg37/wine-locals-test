import IMenuItem from '../../models/IMenuItem';
import { IDataManangerResponse } from './IDataManangerResponse';

export interface IDataManangerGetAll<R> {
  getAll(): IDataManangerResponse<R>;
}

export interface IDataManangerGetOne<R> {
  getOne(id: number): IDataManangerResponse<R>;
}

export interface IDataManangerCreate<R> {
  create(id: number, data: IMenuItem): IDataManangerResponse<R>;
}
