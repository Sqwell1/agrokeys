export interface Item {
  brand: string;
  available: boolean;
  sku: string;
  price: number;
  name: string;
  description: string;
}

export interface ItemsState {
  items: Item[];
  loading: boolean;
  error: string | null;
}
