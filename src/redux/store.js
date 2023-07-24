import uttara from './slicer/newSlice';
import { configureStore } from '@reduxjs/toolkit';

const newConfig = configureStore({
  reducer: uttara,
});

export default newConfig;