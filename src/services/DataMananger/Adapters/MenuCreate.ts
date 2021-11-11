/* eslint-disable class-methods-use-this */
import IMenuItem from '../../../models/IMenuItem';
import IPlaces from '../../../models/IPlaces';
import { getAllData, setData } from '../../../utils/localStorage';
import { IDataManangerCreate } from '../IDataMananger';
import { IDataManangerResponse } from '../IDataManangerResponse';

class MenuCreateAdapter implements IDataManangerCreate<IMenuItem> {
  create(id: number, data: IMenuItem): IDataManangerResponse<IMenuItem> {
    const localData = getAllData() as IPlaces[];

    const newData = localData.map((place, index) => {
      if (index === id) {
        place.menuItems.push(data);
      }
      return place;
    });

    setData(newData);

    return { data };
  }
}

export default MenuCreateAdapter;
