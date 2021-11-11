import IMenuItem from './IMenuItem';

export default interface IPlaces {
  name: string;
  id: number;
  menuItems: IMenuItem[];
}
