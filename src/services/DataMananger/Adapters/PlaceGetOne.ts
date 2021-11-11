/* eslint-disable class-methods-use-this */
import { getAllData } from '../../../utils/localStorage';
import { IDataManangerGetOne } from '../IDataMananger';
import { IDataManangerResponse } from '../IDataManangerResponse';

class PlaceGetOneAdapter<R> implements IDataManangerGetOne<R> {
  getOne(id: number): IDataManangerResponse<R> {
    const localData = getAllData();

    if (Array.isArray(localData)) {
      const place = localData[id];

      if (!place) {
        throw new Error('Place not found');
      }

      return { data: place };
    }

    throw new Error('Place not found');
  }
}

export default PlaceGetOneAdapter;
