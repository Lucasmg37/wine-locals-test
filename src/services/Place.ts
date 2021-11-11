import IPlaces from '../models/IPlaces';
import { getAllPlaces, getOnePlace } from '../utils/dataMananger';

/* eslint-disable class-methods-use-this */
class PlaceService {
  constructor() {
    console.log('sdadasd');
  }

  getOne(index: number): IPlaces {
    return getOnePlace(index);
  }

  getAll(): IPlaces[] {
    return getAllPlaces();
  }
}

export default PlaceService;
