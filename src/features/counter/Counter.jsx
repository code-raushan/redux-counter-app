import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import {increment, decrement, incrementByAmount, decrementByAmount, reset} from './counterSlice'
const Counter = () => {
    const [incrementValue, setIncrementValue]=useState(0)
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
    const changeConstant = Number(incrementValue)
    const resetAll = ()=>{
      setIncrementValue(0)
      dispatch(reset())
    }

  return (
    <div>
        <p>{count}</p>
        <div>    
            <input 
              type="text"
              value={incrementValue} 
              onChange={(e)=>setIncrementValue(e.target.value)}
              placeholder="value to increment"
            /> 
            <button onClick={()=>dispatch(decrementByAmount(changeConstant))}>Decrement by {incrementValue}</button>
            <button onClick={()=>dispatch(increment())}>&nbsp; + &nbsp;</button>
            <button onClick={()=>dispatch(decrement())}>&nbsp; - &nbsp;</button>
            <button onClick={()=>dispatch(incrementByAmount(changeConstant))}>Increment by {incrementValue}</button>
            <div>
              <button onClick={()=>dispatch(reset())}>Reset</button>
              <button onClick={resetAll}>Reset All</button>
            </div>
        </div>
    </div>
  )
}

export default Counter