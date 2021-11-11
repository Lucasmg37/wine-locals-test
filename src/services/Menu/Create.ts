import IMenuItem from '../../models/IMenuItem';
import { priceValidation } from '../../validations/price';
import { IDataManangerCreate } from '../DataMananger/IDataMananger';

class MenuCreate {
  private readonly dataMananger: IDataManangerCreate<IMenuItem>;

  constructor(dataMananger: IDataManangerCreate<IMenuItem>) {
    this.dataMananger = dataMananger;
  }

  create(id: number, data: IMenuItem): IMenuItem {
    priceValidation(data.price);
    return this.dataMananger.create(id, data).data;
  }
}

export default MenuCreate;
