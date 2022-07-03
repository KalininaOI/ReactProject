import { IItems } from '../../../interfaces/IItems';
import { ICreateItemAction, ISetItemsDataAction } from './interfaces';

export const SET_ITEMS_DATA = 'SET_ITEMS_DATA';

export const setItemsDataAction = (payload: IItems[]): ISetItemsDataAction => {
  return { type: SET_ITEMS_DATA, payload };
};

export const CREATE_ITEM = 'CREATE_ITEM';

export const createItemAction = (payload: IItems): ICreateItemAction => {
  return { type: CREATE_ITEM, payload };
};
