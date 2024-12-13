import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: 'ALL', // Domyślny filtr: wszystkie zadania
    reducers: {
        setFilter: (state, action) => action.payload, // Zaktualizuj filtr na podstawie wartości payload
    },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;