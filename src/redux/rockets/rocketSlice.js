import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const rocketAPI = 'https://api.spacexdata.com/v3/Rockets';
export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets API Data',
  async () => {
    const response = await axios.get(rocketAPI);
    return response.data;
  },
);

const rocketReducer = createSlice({
  name: 'Pocket-Me-Rocket-He',
  initialState: {
    rocketArr: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rocketArr = action.payload.map((rocketItems) => ({
          id: rocketItems.id,
          rocket_name: rocketItems.rocket_name,
          rocket_type: rocketItems.rocket_type,
          flickr_images: rocketItems.flickr_images,
        }));
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export default rocketReducer.reducer;