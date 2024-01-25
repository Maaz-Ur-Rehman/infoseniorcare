// healthCareSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // Import axios for making API calls

// Define the initial state
const initialState = {
  data: [],
  loading: false,
  error: null,
};

// Create an asynchronous thunk for fetching healthcare data
 const searchByZip = createAsyncThunk('healthCare/searchByZip', async ({ zipCode, page, limit }) => {
  try {
    // Make an API call here using your actual API module
    const response = await axios.get(`https://scrapedhc.matzsolutions.com/api/healthCareRoute/searchByZipCode/${page}/${limit}/${zipCode}`);
     console.log(response.data,"response")
    return response.data; // Assuming your API returns data in a 'data' property
  } catch (error) {
    throw error;
  }
});

// Create the healthCareSlice
const healthCareSlice = createSlice({
  name: 'healthCare',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchByZip.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchByZip.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Assuming the payload is an array of healthcare items
      })
      .addCase(searchByZip.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

// Export the asynchronous thunk for external use
export { searchByZip };

// Export the reducer
export default healthCareSlice.reducer;
