export const getFormattedPrice = (price: number): string => price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
