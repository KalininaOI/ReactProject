import { IItems } from '../../../interfaces/IItems';

export interface IItemsState {
  itemsData: IItems[];
  loading: boolean;
  error: string | null;
}
