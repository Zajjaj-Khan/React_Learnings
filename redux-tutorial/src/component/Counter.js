import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increment,decrement,incrementByAmount } from '../Counter/counterSlice'

function Counter({counter}) {
    const value = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch()
  return (
    <div>
        <h2>{value}</h2>
        <button onClick={()=> dispatch(incrementByAmount(10))}>Increment</button>
        <button  onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter