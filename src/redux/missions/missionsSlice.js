import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://api.spacexdata.com/v3/missions';
export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});
const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    isLoading: false,
    error: null,
    isMissionsFetched: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.missions = action.payload.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
      }));
      state.isMissionsFetched = true;
    });
    builder.addCase(fetchMissions.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default missionsSlice.reducer;
