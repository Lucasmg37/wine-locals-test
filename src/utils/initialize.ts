import dataJson from '../data/json/database.json';
import { getAllData, setData } from './localStorage';

export const initData = (): void => {
  const localData = getAllData();

  if (!localData) {
    setData(dataJson);
  }
};
