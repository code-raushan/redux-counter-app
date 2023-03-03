import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

//A friendly abstraction over the standard Redux createStore() function.

export const store = configureStore({
    //A single reducer function that will be used as the root reducer, or an object of slice reducers that will be passed to combineReducers().
    reducer: {
        counter: counterReducer
    }
})