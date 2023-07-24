import { configureStore } from '@reduxjs/toolkit';
import uttara from './slicer/newSlice';

const newConfig = configureStore({
  reducer: uttara,
});

export default newConfig;
