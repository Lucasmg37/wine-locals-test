import ValidationError from '../errors/ValidationError';

export const priceValidation = (price: number): boolean => {
  if (!price) {
    throw new ValidationError('price', 'O preço é inválido.');
  }

  if (price < 0) {
    throw new ValidationError('price', 'O preço é inválido.');
  }

  return true;
};
