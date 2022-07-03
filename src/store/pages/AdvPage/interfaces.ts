import { IItems } from '../../../interfaces/IItems';

export interface IItemsState {
  itemsData: IItems[];
  loading: boolean;
  error: string | null;
}

interface IBaseAction {
  type: string;
}

export interface ISetItemsDataAction extends IBaseAction {
  payload: IItems[];
}

export interface ICreateItemAction extends IBaseAction {
  payload: IItems;
}

export type ItemsReducerAction = ISetItemsDataAction | ICreateItemAction;
