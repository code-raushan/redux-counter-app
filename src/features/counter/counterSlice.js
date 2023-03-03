import { createSlice } from "@reduxjs/toolkit";
//A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.


const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        //increment action
        increment: (state)=>{
            state.count +=1
        },
        //decrement action
        decrement: (state)=>{
            state.count -= 1
        },
        //increment by 5
        incrementByAmount: (state, action)=> {
            state.count = state.count + action.payload
        },
        //decrement by 5
        decrementByAmount: (state, action)=>{
            state.count = state.count - action.payload
        },
        reset: (state)=>{
            state.count = 0;
        }
    }
})

export const {increment, decrement, incrementByAmount, decrementByAmount, reset}=counterSlice.actions;
//Action creators for the types of actions that are handled by the slice reducer.

export default counterSlice.reducer;

