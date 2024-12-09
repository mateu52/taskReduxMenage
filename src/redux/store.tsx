import { configureStore } from "@reduxjs/toolkit";

import tasksreducer from './taskSlice';
import filerReducer from './filterSlice';

export const store = configureStore({
    reducer: {
        tasks: tasksreducer,
        filter: filerReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;