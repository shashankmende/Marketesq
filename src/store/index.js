

import { configureStore } from '@reduxjs/toolkit';
import HeaderSlice from './slices/HeaderSlice';
import QuantitySlice from './slices/QuantitySlices'
import UserSlice from './slices/UserSlice'

const store = configureStore({
    reducer: {
        header: HeaderSlice,
        card:QuantitySlice,
        user:UserSlice
    }
});

export default store;
export * from './slices/HeaderSlice'; 
