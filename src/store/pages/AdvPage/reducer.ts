import { SET_ITEMS_DATA } from './actions';
import { IItemsState } from './interfaces';

const initialState: IItemsState = {
  itemsData: [],
  loading: false,
  error: null,
};

export const ItemsReducer = (state: IItemsState = initialState, action: any) => {
  switch (action.type) {
    case SET_ITEMS_DATA:
      return { ...state, itemsData: action.payload };
    default:
      return state;
  }
};
