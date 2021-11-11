import dataJson from '../data/json/database.json';
import IMenuItem from '../models/IMenuItem';
import IPlaces from '../models/IPlaces';
import { getAllData, setData } from './localStorage';

const generateIndexId = (data: unknown): any[] | null => {
  if (Array.isArray(data)) {
    return data.map((item, index) => ({
      id: index,
      ...item,
    }));
  }
  return null;
};

export const initData = (): void => {
  const localData = getAllData();

  if (!localData) {
    const dataWithKeys = generateIndexId(dataJson);
    setData(dataWithKeys);
  }
};

export const getAllPlaces = (): IPlaces[] => {
  const localData = getAllData() as IPlaces[];
  return localData;
};

export const getOnePlace = (index: number): IPlaces => {
  const localData = getAllData() as IPlaces[];
  const place = localData[index];

  if (!place) {
    throw new Error('Place not found');
  }

  return place;
};

export const createItemMenu = (
  indexPlace: number,
  item: IMenuItem,
): IMenuItem => {
  const localData = getAllData() as IPlaces[];

  const newData = localData.map((place, index) => {
    if (index === indexPlace) {
      place.menuItems.push(item);
    }
    return place;
  });

  setData(newData);

  return item;
};
