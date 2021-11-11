import IMenuItem from '../models/IMenuItem';
import { createItemMenu } from '../utils/dataMananger';

/* eslint-disable class-methods-use-this */
class MenuService {
  constructor() {
    console.log('sdadasd');
  }

  create(indexPlace: number, itemMenu: IMenuItem): IMenuItem {
    return createItemMenu(indexPlace, itemMenu);
  }
}

export default MenuService;
