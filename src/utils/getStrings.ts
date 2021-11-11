import IPlaces from '../models/IPlaces';

export const getPlatesExtensionNumber = (place: IPlaces): string => {
  if (!place.menuItems) {
    return '';
  }

  if (place.menuItems.length === 0) {
    return 'Sem pratos cadastrados';
  }

  if (place.menuItems.length === 1) {
    return '1 prato cadastrado';
  }

  return `${place.menuItems.length} pratos cadastrados`;
};

export const getPlacesExtensionNumber = (places: IPlaces[]): string => {
  if (!places) {
    return '';
  }

  if (places.length === 0) {
    return 'Sem lugares cadastrados';
  }

  if (places.length === 1) {
    return '1 lugar cadastrado';
  }

  return `${places.length} lugares cadastrados`;
};
