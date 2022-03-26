/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import navReducer from './slices/cartSlice';
const store  = configureStore({
    reducer: {
        nav: navReducer,
    },
});

export default store;
