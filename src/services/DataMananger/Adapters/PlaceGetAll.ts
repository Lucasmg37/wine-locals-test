/* eslint-disable class-methods-use-this */
import { getAllData } from '../../../utils/localStorage';
import { IDataManangerGetAll } from '../IDataMananger';
import { IDataManangerResponse } from '../IDataManangerResponse';

class PlaceGetAllAdapter<T> implements IDataManangerGetAll<T> {
  getAll(): IDataManangerResponse<T> {
    const localData = getAllData() as T;
    return { data: localData };
  }
}

export default PlaceGetAllAdapter;
