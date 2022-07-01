import { IItems } from '../../../interfaces/IItems';

export const SET_ITEMS_DATA = 'SET_ITEMS_DATA';

export const setItemsDataAction = (payload: IItems) => {
  return { type: SET_ITEMS_DATA, payload };
};
