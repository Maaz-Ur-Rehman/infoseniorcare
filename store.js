import { configureStore } from '@reduxjs/toolkit'
import healthCareSlice from './redux/healthCareSlice'

export const store = configureStore({
  reducer: {
    healthCare:healthCareSlice
  },
})