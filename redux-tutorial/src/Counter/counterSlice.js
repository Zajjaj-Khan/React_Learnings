import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: 0,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: { 
    increment :(state)=>{
        state.value +=1;

    },
    decrement:(state)=>{
      state.value -=1;
    },
    incrementByAmount:(state,action)=>{
      state.value += action.payload;
    }
  },
 
});
export const {increment, decrement,incrementByAmount} = counterSlice.actions;
export const counter = (state) => state.value;
export default counterSlice.reducer;
