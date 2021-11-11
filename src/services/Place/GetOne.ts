import IPlaces from '../../models/IPlaces';
import { IDataManangerGetOne } from '../DataMananger/IDataMananger';

class PlaceGetOne {
  private readonly dataMananger: IDataManangerGetOne<IPlaces>;

  constructor(dataMananger: IDataManangerGetOne<IPlaces>) {
    this.dataMananger = dataMananger;
  }

  getOne(id: number): IPlaces {
    return this.dataMananger.getOne(id).data;
  }
}

export default PlaceGetOne;
