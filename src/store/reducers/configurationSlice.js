import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import configurationsApi from '../api/appConfigurationApi';

const initialState = {
  configurationData: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
};

const getError = (error) => (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

// Get configuration
export const getConfiguration = createAsyncThunk('configuration/getConfiguration', async (configuration, thunkAPI) => {
  try {
    return await configurationsApi.getConfiguration(configuration);
  } catch (error) {
    const message = getError(error);
    return thunkAPI.rejectWithValue(message);
  }
});

export const configurationSlice = createSlice({
  name: 'configuration',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getConfiguration.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getConfiguration.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.configurationData = action.payload;
      })
      .addCase(getConfiguration.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  }
});

export const { reset } = configurationSlice.actions;
export default configurationSlice.reducer;
