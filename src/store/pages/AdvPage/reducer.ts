import { IItems } from '../../../interfaces/IItems';
import { mockedItems } from '../../../mocks/mockedItems';
import { CREATE_ITEM, SET_ITEMS_DATA } from './actions';
import { IItemsState, ItemsReducerAction } from './interfaces';

const initialState: IItemsState = {
  itemsData: mockedItems,
  loading: false,
  error: null,
};

export const ItemsReducer = (
  state: IItemsState = initialState,
  action: ItemsReducerAction
): IItemsState => {
  switch (action.type) {
    case CREATE_ITEM:
      return { ...state, itemsData: [...state.itemsData, action.payload as IItems] };
    case SET_ITEMS_DATA:
      return { ...state, itemsData: action.payload as IItems[] };
    default:
      return state;
  }
};
