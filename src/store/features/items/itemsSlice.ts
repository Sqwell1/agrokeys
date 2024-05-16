import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface Item {
  brand: string;
  available: boolean;
  sku: string;
  price: string;
  name: string;
  description: string;
}

interface ItemsState {
  items: Item[];
  loading: boolean;
  error: string | null;
}

const initialState: ItemsState = {
  items: [],
  loading: false,
  error: null,
};

// Асинхронный thunk экшн для загрузки элементов
export const fetchItems = createAsyncThunk('items/fetchItems', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://6609bc780f324a9a2883b7a5.mockapi.io/agrokeys/agrokeys');
    if (!response.ok) throw new Error('Network response was not ok');
    const data: Item[] = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action: PayloadAction<Item[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default itemsSlice.reducer;
