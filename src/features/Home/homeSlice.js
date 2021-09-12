import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0
}

export const homeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setupCounter: (state, action) => {
        state.count = action.payload;
    },
    incrementCounter: (state, action) => {
        state.count += 1;
    },
    decrementCounter: (state, action) => {
        state.count -= 1;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setupCounter, incrementCounter, decrementCounter } = homeSlice.actions;

export default homeSlice.reducer;