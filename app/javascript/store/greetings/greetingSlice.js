import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreetings = createAsyncThunk('greetings/fetch', async () => {
  const greetings = await fetch('/api/greetings/random');
  const data = await greetings.json();
  return data;
});

const initialState = {
  greeting: '',
  error: '',
  loading: false,
};

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => {
        const newState = { ...state, loading: true };
        return newState;
      })
    //   .addCase(fetchGreetings.fulfilled, (state, action) => {
    //     const newState = { ...state, greeting: action.payload, loading: false };
    //     return newState;
    //   })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        return { ...state, greeting: action.payload.message, loading: false };
      })
      
      .addCase(fetchGreetings.rejected, (state) => {
        const newState = { ...state, error: 'Error 404. Failed to fetch', loading: false };
        return newState;
      });
  },
});

export default greetingSlice.reducer;