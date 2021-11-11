import { app } from '../constants/app';

export const getAllData = (): unknown => {
  const data = localStorage.getItem(app.LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : null;
};

export const setData = (data: unknown): void => {
  localStorage.setItem(app.LOCAL_STORAGE_KEY, JSON.stringify(data));
};
