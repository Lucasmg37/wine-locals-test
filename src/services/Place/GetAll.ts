import IPlaces from '../../models/IPlaces';
import { IDataManangerGetAll } from '../DataMananger/IDataMananger';

class PlaceGetAll {
  private readonly dataMananger: IDataManangerGetAll<IPlaces[]>;

  constructor(dataMananger: IDataManangerGetAll<IPlaces[]>) {
    this.dataMananger = dataMananger;
  }

  getAll(): IPlaces[] {
    return this.dataMananger.getAll().data;
  }
}

export default PlaceGetAll;
